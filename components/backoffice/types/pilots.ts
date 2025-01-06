export enum FlightStatus {
  PENDING = 'PENDING',
  BOOKED = 'BOOKED',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED'
}

export type Pilot = {
    id: number;
    userId: number;
    availability: AvailabilityStatus;
    user: {
      name: string;
      id: number;
    };
  };
  
  export type PilotUnavailability = {
    id: number;
    pilotId: number;
    startTime: Date;
    endTime: Date;
    reason?: string;
  };
  
  export enum AvailabilityStatus {
    AVAILABLE = 'AVAILABLE',
    BOOKED = 'BOOKED',
    OFF_DUTY = 'OFF_DUTY'
  }
  
// types/pilots.ts
export interface CalendarEvent {
  id: string;
  title?: string;
  start: Date;
  end: Date;
  type: 'unavailable' | 'flight';
  reason?: string;
  clientName?: string;
  allDay?: boolean;
}

// types/pilots.ts
export interface Flight {
  id: number;
  userId: number;
  clientName: string;
  start: string | Date;    // Au lieu de timeStart
  end: string | Date;      // Au lieu de timeEnd
  status?: FlightStatus;
  notes?: string;
  assignedPilot?: string | null;
}