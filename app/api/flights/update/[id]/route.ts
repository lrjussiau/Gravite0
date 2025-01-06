import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from 'utils/authOptions';
import { isPast } from 'date-fns';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role === 'PILOT') {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 401 }
      );
    }

    const id = parseInt(params.id);
    const data = await request.json();

    // Validation des données
    if (!data.clientName) {
      return NextResponse.json(
        { message: 'Le nom du client est requis.' },
        { status: 400 }
      );
    }

    if (data.timeStart && isPast(new Date(data.timeStart))) {
      return NextResponse.json(
        { message: 'Impossible de modifier un vol dans le passé.' },
        { status: 400 }
      );
    }

    // Détermination du statut en fonction de la présence d'un pilote
    const status = data.pilotId !== undefined && data.pilotId !== null ? 'BOOKED' : 'PENDING';

    const updatedFlight = await prisma.flight.update({
      where: { id },
      data: {
        date: data.date ? new Date(data.date) : undefined,
        timeStart: data.timeStart ? new Date(data.timeStart) : undefined,
        timeEnd: data.timeEnd ? new Date(data.timeEnd) : undefined,
        clientName: data.clientName,
        pilotId: data.pilotId || null, // Assurez-vous que c'est null si non défini
        notes: data.notes,
        status: status, // Utilisation du statut déterminé
      },
      include: {
        pilot: {
          include: {
            user: true,
          }
        },
        createdBy: true,
      }
    });

    return NextResponse.json(updatedFlight);
  } catch (error) {
    console.error('Erreur détaillée :', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Vol non trouvé' },
        { status: 404 }
      );
    }

    if (error.code?.startsWith('P')) {
      return NextResponse.json(
        { message: 'Erreur de base de données', details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Erreur interne du serveur',
        details: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
};