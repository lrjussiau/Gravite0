import { useState, useEffect } from 'react';
import { Pilot, CalendarEvent, AvailabilityStatus } from '../types/pilots';
import { pilotService } from '../services/pilotService';

interface UsePilotManagementReturn {
  pilots: Pilot[];
  selectedPilot: Pilot | null;
  isLoading: boolean;
  error: string | null;
  events: CalendarEvent[];
  setSelectedPilot: (pilot: Pilot | null) => void;
  handleSelectSlot: (slot: { start: Date; end: Date; reason?: string }) => Promise<void>;
  refreshPilotData: () => Promise<void>;
  handleDeleteUnavailability: (eventId: string) => Promise<void>;
  handleUpdateAvailability: (status: AvailabilityStatus) => Promise<void>;
}

export const usePilotManagement = (): UsePilotManagementReturn => {
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [selectedPilot, setSelectedPilot] = useState<Pilot | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const fetchPilots = async () => {
    setIsLoading(true);
    try {
      const data = await pilotService.fetchAllPilots();
      setPilots(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPilotData = async () => {
    if (!selectedPilot) return;
  
    setIsLoading(true);
    try {
      const [unavailabilities, flights] = await Promise.all([
        pilotService.fetchPilotUnavailabilities(selectedPilot.id),
        pilotService.fetchPilotFlights(selectedPilot.id)
      ]);
  
      const unavailabilityEvents: CalendarEvent[] = unavailabilities.map(u => ({
        id: `unavail-${u.id}`,
        title: u.reason || 'Indisponible',
        start: new Date(u.startTime),
        end: new Date(u.endTime),
        type: 'unavailable',
        pilotId: selectedPilot.id,
        reason: u.reason
      }));
  
      const flightEvents: CalendarEvent[] = flights.map(f => ({
        id: `flight-${f.id}`,
        title: `Vol: ${f.clientName}`,
        start: new Date(f.start), // Changé de timeStart à start
        end: new Date(f.end),     // Changé de timeEnd à end    // Changé de f.end à f.timeEnd
        type: 'flight',
        pilotId: selectedPilot.id,
        status: f.status,
        clientName: f.clientName,
        notes: f.notes || ''
      }));
  
      // Log pour debug
      console.log('Calendar Events:', [...unavailabilityEvents, ...flightEvents]);
  
      setEvents([...unavailabilityEvents, ...flightEvents]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectSlot = async ({ start, end, reason }: { start: Date; end: Date; reason?: string }) => {
    if (!selectedPilot) return;

    try {
      await pilotService.createUnavailability(selectedPilot.id, start, end, reason);
      await fetchPilotData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    }
  };

  const handleDeleteUnavailability = async (eventId: string) => {
    if (!eventId.startsWith('unavail-')) return;
    
    const unavailabilityId = parseInt(eventId.replace('unavail-', ''));
    try {
      await pilotService.deleteUnavailability(unavailabilityId);
      await fetchPilotData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    }
  };

  const handleUpdateAvailability = async (status: AvailabilityStatus) => {
    if (!selectedPilot) return;

    try {
      const updatedPilot = await pilotService.updatePilotAvailability(selectedPilot.id, status);
      setPilots(prev => prev.map(p => p.id === updatedPilot.id ? updatedPilot : p));
      setSelectedPilot(updatedPilot);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    }
  };

  useEffect(() => {
    fetchPilots();
  }, []);

  useEffect(() => {
    if (selectedPilot) {
      fetchPilotData();
    } else {
      setEvents([]);
    }
  }, [selectedPilot]);

  return {
    pilots,
    selectedPilot,
    isLoading,
    error,
    events,
    setSelectedPilot,
    handleSelectSlot,
    refreshPilotData: fetchPilotData,
    handleDeleteUnavailability,
    handleUpdateAvailability
  };
};