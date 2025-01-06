import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';

export async function POST(request: Request) {
  try {
    const { pilotId, startTime, endTime, reason } = await request.json();

    const unavailability = await prisma.pilotUnavailability.create({
      data: {
        pilotId: parseInt(pilotId),
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        reason
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

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    if (!id) {
      return NextResponse.json(
        { error: 'Missing unavailability ID' },
        { status: 400 }
      );
    }

    await prisma.pilotUnavailability.delete({
      where: {
        id: parseInt(id)
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting unavailability:', error);
    return NextResponse.json(
      { error: 'Failed to delete unavailability' },
      { status: 500 }
    );
  }
}