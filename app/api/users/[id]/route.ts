// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from 'utils/prisma';
import { hash } from 'bcrypt';
import { User } from '@prisma/client';

type UpdateUserData = Partial<Omit<User, 'id' | 'passwordHash'>> & {
  password?: string;
};

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);
    const { password, ...data } = await req.json() as UpdateUserData;
    
    // Préparer les données à mettre à jour
    const updateData: Partial<User> = { ...data };
    
    // Si un nouveau mot de passe est fourni, le hasher
    if (password && password.trim() !== '') {
      updateData.passwordHash = await hash(password, 10);
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      include: {
        pilot: true,
      },
    });

    // Destructurer et omettre passwordHash en une seule fois
    const sanitizedUser = Object.fromEntries(
      Object.entries(user).filter(([key]) => key !== 'passwordHash')
    );
    
    return NextResponse.json(sanitizedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);

    // First, delete any related pilot record if it exists
    await prisma.pilot.deleteMany({
      where: { userId },
    });

    // Then delete the user
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}