import { Pilot, PilotUnavailability, AvailabilityStatus, Flight } from '../types/pilots';

export const pilotService = {
  fetchAllPilots: async (): Promise<Pilot[]> => {
    try {
      const response = await fetch('/api/pilots', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch pilots');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching pilots:', error);
      throw error;
    }
  },

  async fetchPilotFlights(pilotId: number): Promise<Flight[]> {
    const response = await fetch(`/api/flights/pilot_schedule?pilotId=${pilotId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des vols');
    }
    return response.json();
  },

  fetchPilotUnavailabilities: async (pilotId: number): Promise<PilotUnavailability[]> => {
    try {
      const response = await fetch(`/api/pilots/${pilotId}/unavailability`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch pilot unavailabilities');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching pilot unavailabilities:', error);
      throw error;
    }
  },

  fetchAvailablePilotsForSlot: async (start: Date, end: Date) => {
    try {
      const response = await fetch('/api/pilots/available_per_slot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ start, end })
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch available pilots');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error fetching available pilots:', error);
      throw error;
    }
  },

  createUnavailability: async (
    pilotId: number, 
    startDate: Date, 
    endDate: Date, 
    reason?: string
  ): Promise<PilotUnavailability> => {
    try {
      const response = await fetch('/api/pilots/unavailability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pilotId,
          startTime: startDate,
          endTime: endDate,
          reason
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create unavailability');
      }
      return response.json();
    } catch (error) {
      console.error('Error creating unavailability:', error);
      throw error;
    }
  },

  deleteUnavailability: async (unavailabilityId: number): Promise<void> => {
    try {
      const response = await fetch(`/api/pilots/unavailability/${unavailabilityId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete unavailability');
      }
    } catch (error) {
      console.error('Error deleting unavailability:', error);
      throw error;
    }
  },

  updatePilotAvailability: async (
    pilotId: number, 
    status: AvailabilityStatus
  ): Promise<Pilot> => {
    try {
      const response = await fetch(`/api/pilots/${pilotId}/availability`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update pilot availability');
      }
      return response.json();
    } catch (error) {
      console.error('Error updating pilot availability:', error);
      throw error;
    }
  }
};