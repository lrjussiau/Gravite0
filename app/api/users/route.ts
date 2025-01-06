import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';
import { hash } from 'bcrypt';
import type { User } from '@prisma/client';

const sanitizeUser = <T extends User>(user: T) => {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => key !== 'passwordHash')
  ) as Omit<T, 'passwordHash'>;
};

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        pilot: true,
      },
    });

    // Remove sensitive information
    const sanitizedUsers = users.map(sanitizeUser);
    
    return NextResponse.json(sanitizedUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
        role,
        ...(role === 'PILOT' && {
          pilot: {
            create: {
              availability: 'AVAILABLE',
            },
          },
        }),
      },
      include: {
        pilot: true,
      },
    });

    // Remove sensitive information
    const sanitizedUser = sanitizeUser(user);
    
    return NextResponse.json(sanitizedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}