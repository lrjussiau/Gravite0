import { Event, Flight } from './types';

type FlightApiResponse = {
  id: number;
  userId: number;
  clientName: string;
  notes: string;
  assignedPilot: string | null; 
  start: Date;                   
  end: Date;                     
  status: Flight['status'];
};

export const flightServices = {
  fetchFlights: async (userRole: string, userId?: number) => {
    try {
      let endpoint = '/api/flights/retrieve/all';
      
      if (userRole === 'PILOT' && userId) {
        console.log(userId)
        endpoint = `/api/flights/pilot_schedule?pilotId=${userId}`;
      }

      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to retrieve flights');
      }


      const flightData = await response.json();
      console.log(flightData);
      return flightData.map((flight: FlightApiResponse) => ({
        id: flight.id,
        userId: flight.userId,
        clientName: flight.clientName,
        notes: flight.notes,
        assignedPilot: flight.assignedPilot,
        assignedPilotId: flight.userId, 
        start: new Date(flight.start),
        end: new Date(flight.end),
        status: flight.status
      }));
    } catch (error) {
      console.error('Error fetching flights:', error);
      return [];
    }
  },

  fetchPilotsAvailablePerSlot: async (slots: { id: string, start: Date, end: Date }[]) => {
    try {
      const response = await fetch('/api/pilots/available_per_slot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          slots: slots.map(slot => ({
            id: slot.id,
            start: slot.start.toISOString(),
            end: slot.end.toISOString(),
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch pilots available per slot');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching pilots available per slot:', error);
      return [];
    }
  },

  createFlight: async (slot: Event, flight: Flight) => {
    try {
      const response = await fetch('/api/flights/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          startTime: slot.start,
          clientName: flight.clientName,
          notes: flight.notes,
          assignedPilotId: flight.assignedPilotId || null
        }),
      });
    
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create flight');
      }
    
      const newFlight = await response.json();
      return {
        id: newFlight.id,
        userId: newFlight.userId,
        clientName: newFlight.clientName,
        notes: newFlight.notes,
        assignedPilot: newFlight.pilotName || null,
        assignedPilotId: newFlight.pilotId || null,
        status: newFlight.status,
        start: new Date(newFlight.timeStart),
        end: new Date(newFlight.timeEnd),
      };
    } catch (error) {
      throw error;
    }
  },

  updateFlight: async (flight: Flight) => {
    try {
      const response = await fetch(`/api/flights/update/${flight.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({
          notes: flight.notes,
          clientName: flight.clientName,
          pilotId: flight.assignedPilotId,
          status: flight.status
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error( errorData.message || 'Failed to update flight');
      }
  
      const updatedFlight = await response.json();
      return {
        id: updatedFlight.id,
        userId: updatedFlight.userId,
        clientName: updatedFlight.clientName,
        notes: updatedFlight.notes,
        assignedPilot: updatedFlight.pilotName || null,
        assignedPilotId: updatedFlight.pilotId || null,
        status: updatedFlight.status,
        start: new Date(updatedFlight.timeStart),
        end: new Date(updatedFlight.timeEnd),
      };
    } catch (error) {
      throw error;
    }
  },

  deleteFlight: async (flightId: number) => {
    try {
      const response = await fetch(`/api/flights/delete/${flightId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete flight');
      }
    } catch (error) {
      throw error;
    }
  }
};