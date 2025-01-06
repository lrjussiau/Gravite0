'use client';

import { BackofficeLayout } from 'components/backoffice/Layout';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function BackofficeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return null; // ou un composant de loading
  }

  if (!session) {
    redirect('/login');
  }

  // Vérification du rôle si nécessaire
  if (session.user?.role !== 'ADMIN') {
    redirect('/calendar');
  }

  return <BackofficeLayout>{children}</BackofficeLayout>;
}