import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from 'utils/authOptions';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { pilotId, startTime, endTime, reason } = await request.json();

    // Validation basique
    if (!pilotId || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const unavailability = await prisma.pilotUnavailability.create({
      data: {
        pilotId: parseInt(pilotId.toString()),
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        reason: reason || null
      }
    });

    return NextResponse.json(unavailability);
  } catch (error) {
    console.error('Error creating unavailability:', error);
    return NextResponse.json(
      { error: 'Failed to create unavailability' },
      { status: 500 }
    );
  }
}
