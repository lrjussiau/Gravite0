import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';

export async function POST(request: Request) {
  try {
    const { slots } = await request.json();

    if (!slots || !Array.isArray(slots)) {
      return NextResponse.json(
        { error: 'Missing or invalid slots data' },
        { status: 400 }
      );
    }

    const availabilityData = await Promise.all(
        slots.map(async (slot) => {
          const startDate = new Date(slot.start);
          const endDate = new Date(slot.end);
      
          const availablePilots = await prisma.pilot.findMany({
            where: {
              availability: 'AVAILABLE',
              AND: [
                {
                  unavailability: {
                    none: {
                      AND: [
                        { startTime: { lte: endDate } },
                        { endTime: { gte: startDate } }
                      ]
                    }
                  }
                },
                {
                  // Pour les vols - même logique que l'ancienne route
                  flights: {
                    none: {
                      AND: [
                        { timeStart: { lt: endDate } },
                        { timeEnd: { gt: startDate } },
                        { status: { in: ['BOOKED', 'PENDING'] } }
                      ]
                    }
                  }
                }
              ]
            },
            include: {
              user: {
                select: {
                  id: true,
                  name: true
                }
              }
            }
          });
      
          return {
            slotId: slot.id,
            availablePilots,
            pilotsAvailable: availablePilots.length
          };
        })
      );

    return NextResponse.json(availabilityData);
  } catch (error) {
    console.error('Error checking slots availability:', error);
    return NextResponse.json(
      { error: 'Failed to check slots availability' },
      { status: 500 }
    );
  }
}