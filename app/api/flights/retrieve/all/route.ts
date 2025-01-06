import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';

export async function GET() {
    try {
      const flights = await prisma.flight.findMany({
        include: {
          pilot: {
            include: {
              user: true,
            },
          },
          createdBy: true,
        },
      });
  
      // Formater les données pour correspondre à ce qu'attend le calendrier
      const formattedFlights = flights.map(flight => ({
        id: flight.id,
        start: flight.timeStart,
        end: flight.timeEnd,
        clientName: flight.clientName,
        notes: flight.notes,
        userId: flight.pilot?.user?.id || null,
        assignedPilot: flight.pilot?.user?.name || null,
        assignedPilotId: flight.pilotId || null,
        status: flight.status
      }));
  
      return NextResponse.json(formattedFlights);
    } catch (error) {
      console.error('Error fetching flights:', error);
      return NextResponse.json(
        { error: 'Failed to fetch flights' },
        { status: 500 }
      );
    }
  }