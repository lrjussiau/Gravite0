'use client';

import React, { useEffect, useState, useCallback } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, View } from 'react-big-calendar';
import { useSession } from 'next-auth/react';
import SlotDetailsModal from './modals/SlotDetailsModal';
import { Event, CalendarView, Localizer } from './types';
import { CalendarWrapper } from './calendar.styled';
import { flightServices } from './service';
import { getTimeSlotConfig, localizer, messages, formats } from './config';
import { useCalendarHandlers } from './hooks/useCalendarHandlers';
import { MonthView } from './views/MonthView';
import { WeekView } from './views/WeekView';
import { isSameDay } from 'date-fns';

const MyCalendar = () => {
  const { data: session } = useSession();
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<View>('month');
  const userRole = session?.user.role;

  const {
    detailsModalOpen,
    selectedSlot,
    availablePilots,
    editingFlight,
    error,
    formData,
    setDetailsModalOpen,
    handleSelectEvent,
    handleDeleteFlight,
    handleUpdateFlight,
    handleCreateFlightInSlot,
    handleEditFlight,
    handleAddFlight,
    handleFormChange,
    resetForm,
    handleNavigate,
    handleViewChange
  } = useCalendarHandlers({
    events,
    setEvents,
    setCurrentDate,
    setCurrentView,
    currentView,
    userRole
  });

  const generateTimeSlots = useCallback((startDate: Date, endDate: Date) => {
    const slots: Event[] = [];
    const currentDate = new Date(startDate);
    const actualEndDate = new Date(endDate);
    
    if (currentDate.getDay() === 0 && currentView === 'week') {
      currentDate.setDate(currentDate.getDate() - 6);
    }
    
    if (currentView === 'week') {
      actualEndDate.setDate(actualEndDate.getDate() + 1);
    }
  
    const { slotDuration, getDayStartTime, getDayEndTime } = getTimeSlotConfig();
  
    while (currentDate <= actualEndDate) {
      const dayStartTime = getDayStartTime(currentDate);
      const dayEndTime = getDayEndTime(currentDate);
  
      let slotStart = new Date(dayStartTime);
      while (slotStart < dayEndTime) {
        const slotEnd = new Date(slotStart.getTime() + slotDuration);
        slots.push({
          id: `${slotStart.getTime()}-${slotEnd.getTime()}`,
          title: '',
          notes: '',
          start: new Date(slotStart),
          end: new Date(slotEnd),
          flights: [],
        });
        slotStart = new Date(slotEnd);
      }
  
      currentDate.setDate(currentDate.getDate() + 1);
      currentDate.setHours(0, 0, 0, 0);
    }
    return slots;
  }, [currentView]);

  useEffect(() => {
    const fetchFlights = async () => {
      if (!userRole) return;
  
      try {
        const startDate = (localizer as Localizer).startOf(currentDate, currentView as CalendarView);
        const endDate = (localizer as Localizer).endOf(currentDate, currentView as CalendarView);
        const timeSlots = generateTimeSlots(startDate, endDate);
        
        const flights = await flightServices.fetchFlights(userRole, session?.user?.id);
        let updatedEvents = timeSlots.map((slot) => ({
          ...slot,
          flights: flights.filter((flight) => 
            flight.start.getTime() >= slot.start.getTime() &&
            flight.end.getTime() <= slot.end.getTime()
          )
        }));
  
        if (userRole === 'PILOT') {
          updatedEvents = updatedEvents.filter((slot) => slot.flights.length > 0);
        }
  
        if (userRole !== 'PILOT') {
          const pilotsAvailableData = await flightServices.fetchPilotsAvailablePerSlot(updatedEvents);
          updatedEvents = updatedEvents.map((event) => ({
            ...event,
            pilotsAvailable: pilotsAvailableData.find(
              (data) => data.slotId === event.id
            )?.pilotsAvailable || 0,
          }));
        }
  
        setEvents(updatedEvents);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };
  
    fetchFlights();
  }, [currentDate, currentView, userRole, session?.user?.id, generateTimeSlots]);

  const eventTitleAccessor = (event: Event) => {
    if (!userRole || !session) return '';

    if (userRole === 'PILOT') {
      const pilotFlights = event.flights.filter(
        (flight) => flight.userId === session.user.id
      );
      return pilotFlights.length > 0
        ? `Flight: ${pilotFlights[0].clientName}`
        : '';
    }
    
    if (userRole === 'ADMIN') {
      return `Flights Booked: ${event.flights.length}`;
    }
    
    if (userRole === 'COMPANY') {
      return `Pilots Available: ${event.pilotsAvailable}`;
    }

    return '';
  };

  return (
    <CalendarWrapper>
      <Calendar<Event>
        localizer={localizer}
        events={events}
        titleAccessor={eventTitleAccessor}
        toolbar={true}
        messages={messages}
        formats={formats}
        culture='fr'
        min={new Date(new Date().setHours(8, 0, 0))}
        max={new Date(new Date().setHours(19, 0, 0))}
        view={currentView}
        length={1}
        views={{
          month: true,
          week: true,
          day: true,
          agenda: true
        }}
        dayLayoutAlgorithm="no-overlap"
        components={{
          dateCellWrapper: (props) => (
            <MonthView
              date={props.value}
              currentDate={currentDate}
              events={events.filter(event => isSameDay(event.start, props.value))}
              onNavigate={handleNavigate}
              onViewChange={handleViewChange}
              userRole={userRole}          
              userId={session?.user?.id} 
            />
          ),
          event: (props) => (
            <WeekView 
              event={props.event}
              userRole={userRole}
              userId={session?.user?.id}
              onSelect={handleSelectEvent}
              viewType={currentView}
            />
          )
        }}
        onView={(newView: View) => setCurrentView(newView)}
        date={currentDate}
        onNavigate={handleNavigate}
        startAccessor="start"
        endAccessor="end"
        selectable={false}
      />

      <SlotDetailsModal
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        selectedSlot={selectedSlot}
        availablePilots={availablePilots}
        editingFlight={editingFlight}
        error={error}
        formData={formData}
        userRole={userRole}
        onFlightUpdate={handleUpdateFlight}
        onFlightCreate={handleCreateFlightInSlot}
        onFlightDelete={handleDeleteFlight}
        onEditFlight={handleEditFlight}
        onAddFlight={handleAddFlight}
        onFormChange={handleFormChange}
        onResetForm={resetForm}
      />
    </CalendarWrapper>
  );
};

export default MyCalendar;