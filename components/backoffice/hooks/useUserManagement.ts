// hooks/useUserManagement.ts
import { useState, useEffect } from 'react';
import { User, CreateUserDto, UpdateUserDto, Role } from '../types/users';
import { userService } from '../services/userService';

interface UseUserManagementReturn {
  users: User[];
  filteredUsers: User[];
  isLoading: boolean;
  error: string | null;
  activeTab: Role.PILOT | Role.COMPANY;
  setActiveTab: (tab: Role.PILOT | Role.COMPANY) => void;
  createUser: (userData: CreateUserDto) => Promise<void>;
  updateUser: (userId: number, userData: UpdateUserDto) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
  refreshUsers: () => Promise<void>;
}

export const useUserManagement = (): UseUserManagementReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Role.PILOT | Role.COMPANY>(Role.PILOT);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const data = await userService.fetchAllUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredUsers = users.filter(user => 
    user.role === activeTab
  );

  const createUser = async (userData: CreateUserDto) => {
    setIsLoading(true);
    try {
      await userService.createUser(userData);
      await fetchUsers();
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (userId: number, userData: UpdateUserDto) => {
    setIsLoading(true);
    try {
      await userService.updateUser(userId, userData);
      await fetchUsers();
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (userId: number) => {
    setIsLoading(true);
    try {
      await userService.deleteUser(userId);
      await fetchUsers();
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    filteredUsers,
    isLoading,
    error,
    activeTab,
    setActiveTab,
    createUser,
    updateUser,
    deleteUser,
    refreshUsers: fetchUsers
  };
};