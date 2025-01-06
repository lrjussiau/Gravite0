import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from 'utils/authOptions';
import { isPast } from 'date-fns';
import { FlightStatus } from '@prisma/client'; 

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role === 'PILOT') {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { startTime, clientName, notes, assignedPilotId } = body;

    // Validations
    if (!startTime) {
      return NextResponse.json(
        { message: 'La date de départ est requise.' },
        { status: 400 }
      );
    }

    if (!clientName) {
      return NextResponse.json(
        { message: 'Le nom du client est requis.' },
        { status: 400 }
      );
    }

    const flightStartTime = new Date(startTime);

    if (isPast(flightStartTime)) {
      return NextResponse.json(
        { message: 'Impossible de créer un vol dans le passé.' },
        { status: 400 }
      );
    }

    const timeStart = new Date(startTime);
    const timeEnd = new Date(timeStart.getTime() + 1.5 * 60 * 60 * 1000 - 1);

    // Le statut est déterminé uniquement par la présence d'un pilote, quel que soit le rôle
    const dataToCreate = {
      date: timeStart,
      timeStart: timeStart,
      timeEnd: timeEnd,
      clientName,
      status: assignedPilotId !== undefined && assignedPilotId !== null 
        ? FlightStatus.BOOKED 
        : FlightStatus.PENDING,
      createdById: session.user.id,
      notes: notes || null,
      pilotId: assignedPilotId || null // Normalisation de la valeur
    };

    const flight = await prisma.flight.create({
      data: dataToCreate,
      include: {
        pilot: {
          include: {
            user: true
          }
        }
      }
    });

    const response = {
      ...flight,
      userId: flight.pilot?.user?.id || null,
      pilotName: session.user.role === 'COMPANY' ? null : flight.pilot?.user?.name || null,
      type: 'FLIGHT',
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Erreur détaillée :', error);
    return NextResponse.json(
      { 
        message: 'Erreur interne du serveur',
        details: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}