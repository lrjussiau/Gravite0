'use client';  // This component is client-side

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function SessionProviderWrapper({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
