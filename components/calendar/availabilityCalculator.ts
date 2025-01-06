import { Event } from './types';

interface DayFlightsCalculation {
  totalAvailableFlights: number;
  bookedFlights: number;
  availablePilots: number;
}

export const calculateDayFlights = (
  dayEvents: Event[], 
  userRole?: string, 
  userId?: number
): DayFlightsCalculation => {
  // Pour un pilote spécifique
  if (userRole === 'PILOT' && userId) {
    const pilotFlights = dayEvents.flatMap(event => 
      event.flights.filter(flight => flight.userId === userId)
    );
    return {
      totalAvailableFlights: dayEvents.length, // Slots totaux disponibles
      bookedFlights: pilotFlights.length,
      availablePilots: dayEvents.reduce((sum, event) => sum + (event.pilotsAvailable || 0), 0)
    };
  }

  let totalAvailableFlights = 0;
  let bookedFlights = 0;
  let availablePilots = 0;

  dayEvents.forEach(event => {
    // Nombre de pilotes disponibles pour ce créneau
    const slotsAvailable = event.pilotsAvailable || 0;
    
    // Vols réservés et en attente
    const bookedInSlot = event.flights.filter(f => f.status === 'BOOKED').length;
    const pendingInSlot = event.flights.filter(f => f.status === 'PENDING').length;

    // Calcul des totaux
    availablePilots += slotsAvailable;
    totalAvailableFlights += slotsAvailable + bookedInSlot; // Capacité totale
    bookedFlights += bookedInSlot + pendingInSlot; // Vols occupés ou en attente
  });

  return {
    totalAvailableFlights,
    bookedFlights,
    availablePilots
  };
};

export const getSlotStatus = (event: Event): 'disponible' | 'réservé' | 'en attente' => {
  const hasPendingFlights = event.flights.some(flight => flight.status === 'PENDING');
  const hasBookedFlights = event.flights.some(flight => flight.status === 'BOOKED');
  const hasAvailablePilots = (event.pilotsAvailable || 0) > 0;

  if (hasPendingFlights) return 'en attente';
  if (hasBookedFlights && !hasAvailablePilots) return 'réservé';
  return 'disponible';
};