'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, Views, DateLocalizer } from 'react-big-calendar';
import { localizer, messages, calendarConfig } from './calendarConfig';
import {
  Container,
  PilotList,
  PilotItem,
  CalendarContainer,
  Legend,
  LegendItem,
  LegendColor,
  ActionBar,
  ActionButton,
  LoadingSpinner,
  ErrorMessage,
  Modal,
  ModalContent,
  ModalActions
} from './PilotAvailability.styled';
import { SubTitle } from 'components/shared/Typography';
import { Clock, Calendar as CalendarIcon } from 'lucide-react';
import { usePilotManagement } from '../hooks/usePilotManagement';
import { CalendarEvent } from '../types/pilots';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const PilotAvailability = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showUnavailabilityModal, setShowUnavailabilityModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null);
  const [showLongUnavailabilityModal, setShowLongUnavailabilityModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [isAllDay, setIsAllDay] = useState(false);
  
  const {
    pilots,
    selectedPilot,
    isLoading,
    error,
    events,
    setSelectedPilot,
    handleSelectSlot,
    handleDeleteUnavailability,
    refreshPilotData
  } = usePilotManagement();

    // Effet pour sélectionner le premier pilote par défaut
    useEffect(() => {
        if (pilots.length > 0 && !selectedPilot) {
            setSelectedPilot(pilots[0]);
        }
        }, [pilots, selectedPilot, setSelectedPilot]);

  const eventTitleAccessor = (event: CalendarEvent) => {
    if (event.type === 'unavailable') {
      return event.reason || 'Indisponible';
    }
    return `Vol: ${event.clientName}`;
  };

  const handleEventClick = (event: CalendarEvent) => {
    if (event.type === 'unavailable' && window.confirm('Voulez-vous supprimer cette indisponibilité ?')) {
      handleDeleteUnavailability(event.id);
    }
  };

  const handleSlotSelect = ({ start, end }: { start: Date; end: Date }) => {
    setSelectedSlot({ start, end });
    setReason('');
    setIsAllDay(false);
    setShowUnavailabilityModal(true);
  };

  const handleUnavailabilitySubmit = () => {
    if (!selectedSlot) return;

    let { start, end } = selectedSlot;
    
    if (isAllDay) {
      // Définir l'heure de début à 8h00 et l'heure de fin à 18h00
      start = new Date(new Date(start).setHours(8, 0, 0));
      end = new Date(new Date(end).setHours(18, 0, 0));
    }

    handleSelectSlot({
      start,
      end,
      reason: reason || undefined
    });

    setShowUnavailabilityModal(false);
    setSelectedSlot(null);
    setReason('');
    setIsAllDay(false);
  };

  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  const createDailyUnavailability = async (start: Date, end: Date, reason?: string) => {
    const currentDate = new Date(start);
    const endDateLoop = new Date(end);

    while (currentDate <= endDateLoop) {
      const dailyStart = new Date(currentDate);
      dailyStart.setHours(8, 0, 0);
      
      const dailyEnd = new Date(currentDate);
      dailyEnd.setHours(18, 0, 0);

      await handleSelectSlot({
        start: dailyStart,
        end: dailyEnd,
        reason: reason
      });

      // Passer au jour suivant
      currentDate.setDate(currentDate.getDate() + 1);
    }
  };

  const handleLongUnavailabilitySubmit = async () => {
    if (!selectedPilot) return;

    try {
      await createDailyUnavailability(startDate, endDate, reason);
      setShowLongUnavailabilityModal(false);
      setReason('');
      refreshPilotData(); // Rafraîchir le calendrier pour afficher les nouvelles indisponibilités
    } catch (error) {
      console.error('Erreur lors de la création des indisponibilités:', error);
      // Vous pouvez ajouter ici un message d'erreur pour l'utilisateur si nécessaire
    }
  };


  return (
    <Container>
      <PilotList>
        <SubTitle>Pilotes</SubTitle>
        {isLoading && <LoadingSpinner>Chargement...</LoadingSpinner>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {pilots.map(pilot => (
          <PilotItem
            key={pilot.id}
            $isSelected={selectedPilot?.id === pilot.id}
            onClick={() => setSelectedPilot(pilot)}
          >
            {pilot.user.name}
          </PilotItem>
        ))}
      </PilotList>

      <CalendarContainer>
        <ActionBar>
          <Legend>
            <LegendItem>
              <LegendColor $color="#FF5656" />
              <span>Indisponible</span>
            </LegendItem>
            <LegendItem>
              <LegendColor $color="#56A9FF" />
              <span>Vol réservé</span>
            </LegendItem>
          </Legend>

          <div className="flex gap-2">
            <ActionButton 
              onClick={() => setShowLongUnavailabilityModal(true)}
              disabled={!selectedPilot}
            >
              <CalendarIcon size={18} />
              Indisponibilité longue
            </ActionButton>
            <ActionButton onClick={refreshPilotData}>
              <Clock size={18} />
              Rafraîchir
            </ActionButton>
          </div>
        </ActionBar>

        <Calendar
          localizer={localizer}
          events={events}
          messages={messages}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 550 }}
          selectable={!!selectedPilot}
          onSelectSlot={handleSlotSelect}
          onSelectEvent={handleEventClick}
          titleAccessor={eventTitleAccessor}
          eventPropGetter={(event: CalendarEvent) => ({
            style: {
              backgroundColor: event.type === 'unavailable' ? '#FF5656' : '#56A9FF',
              borderRadius: '3px',
              opacity: 0.8,
              color: 'white',
              border: '0px',
              display: 'block',
              fontSize: '12px',
              lineHeight: '1.2',
              padding: '2px 5px'
            }
          })}
          defaultView={Views.WEEK}
          views={calendarConfig.views}
          min={calendarConfig.timeSlotConfig.min}
          max={calendarConfig.timeSlotConfig.max}
          date={currentDate}
          onNavigate={handleNavigate}
          timeslots={2}
          step={30}
          formats={{
            eventTimeRangeFormat: () => '',
            timeGutterFormat: (date: Date, culture?: string, localizer?: DateLocalizer) =>
              localizer?.format(date, 'HH:mm', culture),
          }}
        />

        {showLongUnavailabilityModal && (
          <Modal>
            <ModalContent>
              <h3>Nouvelle indisponibilité longue durée</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Date de début</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date || new Date())}
                    className="w-full p-2 border rounded"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div>
                  <label className="block mb-2">Date de fin</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => setEndDate(date || new Date())}
                    className="w-full p-2 border rounded"
                    dateFormat="dd/MM/yyyy"
                    minDate={startDate}
                  />
                </div>
                <div>
                  <label className="block mb-2">Raison (optionnel)</label>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Vacances, formation, etc."
                  />
                </div>
              </div>
              <ModalActions>
                <ActionButton onClick={() => setShowLongUnavailabilityModal(false)}>
                  Annuler
                </ActionButton>
                <ActionButton 
                  $variant="primary"
                  onClick={handleLongUnavailabilitySubmit}
                >
                  Confirmer
                </ActionButton>
              </ModalActions>
            </ModalContent>
          </Modal>
        )}

        {showUnavailabilityModal && (
          <Modal>
            <ModalContent>
              <h3>Nouvelle indisponibilité</h3>
              <div>
                <label>
                  <input
                    type="text"
                    id="reason"
                    placeholder="Raison (optionnel)"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="allDay"
                    checked={isAllDay}
                    onChange={(e) => setIsAllDay(e.target.checked)}
                  />
                  Toute la journée (8h-18h)
                </label>
              </div>
              <ModalActions>
                <ActionButton onClick={() => setShowUnavailabilityModal(false)}>
                  Annuler
                </ActionButton>
                <ActionButton 
                  $variant="primary"
                  onClick={handleUnavailabilitySubmit}
                >
                  Confirmer
                </ActionButton>
              </ModalActions>
            </ModalContent>
          </Modal>
        )}
      </CalendarContainer>
    </Container>
  );
};

export default PilotAvailability;