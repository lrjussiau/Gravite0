// WeekView.tsx
import React from 'react';
import { format } from 'date-fns';
import { View } from 'react-big-calendar';
import { Event } from '../types';
import {
  EventWrapper,
  ContentContainer,
  TimeContainer,
  Time,
  Status,
  InfoText
} from './weekView.styled';
import { BREAKPOINTS } from 'utils/DeviceDetect';

interface WeekViewProps {
  event: Event;
  userRole?: string;
  userId?: number;
  onSelect?: (event: Event) => void;
  viewType: View;
}

const getSlotStatus = (event: Event): 'disponible' | 'complet' | 'en attente' => {
  const hasPendingFlights = event.flights.some(flight => flight.status === 'PENDING');
  const hasBookedFlights = event.flights.some(flight => flight.status === 'BOOKED');
  const totalPilots = event.pilotsAvailable;

  if (hasPendingFlights) return 'en attente';
  if (hasBookedFlights && totalPilots === 0) return 'complet';
  return 'disponible';
};

const calculateDayFlights = (dayEvents: Event[]) => {
  let totalAvailableFlights = 0;
  let bookedFlights = 0;

  dayEvents.forEach(event => {
    const slotsAvailable = event.pilotsAvailable || 0;
    const bookedInSlot = event.flights.filter(flight => flight.status === 'BOOKED').length;
    const pendingInSlot = event.flights.filter(flight => flight.status === 'PENDING').length;

    totalAvailableFlights += slotsAvailable + bookedInSlot;
    bookedFlights += bookedInSlot + pendingInSlot;
  });

  return {
    totalAvailableFlights,
    bookedFlights
  };
};

const getDisplayText = (event: Event, userRole?: string, userId?: number, viewType?: View): string => {
  const bookedFlights = calculateDayFlights([event]).bookedFlights;
  const totalAvailableFlights = calculateDayFlights([event]).totalAvailableFlights;
  
  // Si on est en vue semaine et sur mobile, on affiche le format compact
  if (viewType === 'week' && window.innerWidth <= BREAKPOINTS.mobile) {
    return `${bookedFlights}/${totalAvailableFlights}`;
  }
  
  if (userRole === 'PILOT' && userId) {
    const pilotFlight = event.flights?.find(flight => flight.userId === userId);
    return pilotFlight ? `Vol: ${pilotFlight.clientName}` : 'Disponible';
  }
  
  if (userRole === 'ADMIN') {
    return `Vols réservés: ${event.flights.length || 0}`;
  }
  
  return `Pilotes disponibles: ${event.pilotsAvailable || 0}`;
};

export const WeekView: React.FC<WeekViewProps> = ({
  event,
  userRole,
  userId,
  onSelect,
  viewType
}) => {
  const handleClick = () => {
    if (onSelect) onSelect(event);
  };

  const status = getSlotStatus(event);
  const displayText = getDisplayText(event, userRole, userId, viewType); // Ajout du viewType ici

  return (
    <EventWrapper $viewType={viewType} onClick={handleClick}>
      <ContentContainer $viewType={viewType}>
        <TimeContainer $viewType={viewType}>
          <Time>{format(event.start, 'HH:mm')}</Time>
          <Status $status={status} $viewType={viewType}>
            {status}
          </Status>
        </TimeContainer>
        <InfoText $viewType={viewType}>
          {displayText}
        </InfoText>
      </ContentContainer>
    </EventWrapper>
  );
};

export default WeekView;