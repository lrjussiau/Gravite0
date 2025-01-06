import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';

export async function POST(request: Request) {
  try {
    const { startTime, endTime } = await request.json();

    if (!startTime || !endTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const start = new Date(startTime);
    const end = new Date(endTime);

    const availablePilots = await prisma.pilot.findMany({
      where: {
        availability: 'AVAILABLE',
        flights: {
          none: {
            AND: [
              { timeStart: { lt: end } },
              { timeEnd: { gt: start } }
            ]
          }
        }
      },
      select: {
        id: true,
        user: {
          select: {
            name: true
          }
        }
      }
    });

    return NextResponse.json(availablePilots);
  } catch (error) {
    console.error('Error in select_pilot:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}