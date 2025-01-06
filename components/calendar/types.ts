export type Pilot = {
    id: number;
    user: {
      name: string;
      id: number;
    };
  };
  
  export type Flight = {
    id: number;
    userId: number;
    clientName: string;
    notes: string;
    assignedPilot: string | null;
    assignedPilotId?: number | null;
    start: Date;
    end: Date;
    status: 'PENDING' | 'BOOKED' | 'COMPLETED' | 'CANCELED';
  };
  
  export type Event = {
    id: string;
    title: string;
    notes: string;
    start: Date;
    end: Date;
    flights: Flight[];
    pilotsAvailable?: number;
  };


  export type PilotsAvailableInfo = {
    slotId: string;
    pilotsAvailable: number;
  };

  export type CalendarView = 'month' | 'week' | 'day' | 'agenda';

  export interface Localizer {
    startOf: (date: Date, unit: CalendarView) => Date;
    endOf: (date: Date, unit: CalendarView) => Date;
  }
