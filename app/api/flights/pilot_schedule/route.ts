export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from 'utils/authOptions';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const url = new URL(request.url);
    const pilotId = url.searchParams.get('pilotId');

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    let flights;
    
    if (session.user.role === 'ADMIN') {
      flights = await prisma.flight.findMany({
        where: {
          pilotId: parseInt(pilotId!)
        },
        include: {
          pilot: {
            include: {
              user: true
            }
          }
        }
      });
    } else if (session.user.role === 'PILOT') {
      flights = await prisma.flight.findMany({
        where: {
          pilot: {
            userId: session.user.id
          }
        },
        include: {
          pilot: {
            include: {
              user: true
            }
          }
        }
      });
    } else {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formattedFlights = flights.map(flight => ({
      id: flight.id,
      userId: flight.pilot?.user.id || null,
      clientName: flight.clientName,
      start: flight.timeStart,
      end: flight.timeEnd,
      status: flight.status,
      assignedPilot: flight.pilot?.user.name || null,
      notes: flight.notes
    }));

    return NextResponse.json(formattedFlights);
  } catch (error) {
    console.error('Error in pilot_schedule:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}