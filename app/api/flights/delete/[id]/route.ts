import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from 'utils/authOptions';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role === 'PILOT') {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const id = parseInt(params.id);

    const deletedFlight = await prisma.flight.delete({
      where: { id },
      include: {
        pilot: {
          include: {
            user: true
          }
        }
      }
    });

    return NextResponse.json(deletedFlight);
  } catch (error) {
    console.error('Error deleting flight:', error);
    return NextResponse.json(
      { 
        error: 'Failed to delete flight',
        details: error.message 
      },
      { status: 500 }
    );
  }
}