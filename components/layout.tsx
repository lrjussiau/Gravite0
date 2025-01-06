import { ReactNode } from 'react';
import SessionProviderWrapper from './SessionProviderWrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProviderWrapper>
      {children}
    </SessionProviderWrapper>
  );
}
