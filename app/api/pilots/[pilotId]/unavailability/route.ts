import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';

export async function GET(
  request: Request,
  { params }: { params: { pilotId: string } }
) {
  try {
    const pilotId = parseInt(params.pilotId);
    
    const unavailabilities = await prisma.pilotUnavailability.findMany({
      where: {
        pilotId: pilotId
      },
      orderBy: {
        startTime: 'asc'
      }
    });

    return NextResponse.json(unavailabilities);
  } catch (error) {
    console.error('Error fetching pilot unavailabilities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pilot unavailabilities' },
      { status: 500 }
    );
  }
}