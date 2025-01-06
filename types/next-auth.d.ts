

import NextAuth from 'next-auth';

// Extend the User type to include custom fields (id and role)
declare module 'next-auth' {
  interface User {
    id: number;
    role: string;
  }

  interface Session {
    user: {
      id: number;
      role: string;
    }
  }
}
