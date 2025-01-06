import { AvailabilityStatus } from './pilots';

export enum Role {
    ADMIN = 'ADMIN',
    COMPANY = 'COMPANY',
    PILOT = 'PILOT'
  }
  
  export type User = {
    id: number;
    name: string;
    email: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    pilot?: {
      id: number;
      availability: AvailabilityStatus;
    };
  };
  
  export type CreateUserDto = {
    name: string;
    email: string;
    password: string;
    role: Role;
  };
  
  export type UpdateUserDto = {
    name?: string;
    email?: string;
    password?: string;
    role?: Role;
  };
  
  export type UserResponse = Omit<User, 'passwordHash'>;