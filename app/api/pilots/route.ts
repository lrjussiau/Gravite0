import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';

export async function GET() {
  try {
    const pilots = await prisma.pilot.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });

    return NextResponse.json(pilots);
  } catch (error) {
    console.error('Error fetching pilots:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pilots' },
      { status: 500 }
    );
  }
}