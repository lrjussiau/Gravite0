'use client';
import React from 'react';
import { Role, CreateUserDto, UpdateUserDto, User } from '../types/users';
import * as S from './UserForm.styled';

interface UserFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateUserDto | (UpdateUserDto & { id: number })) => Promise<void>;
  initialData?: User;
  isLoading?: boolean;
}

const UserForm = ({ isOpen, onClose, onSubmit, initialData, isLoading }: UserFormProps) => {
  const [formData, setFormData] = React.useState<CreateUserDto>({
    name: initialData?.name || '',
    email: initialData?.email || '',
    password: '',
    role: initialData?.role || Role.PILOT,
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Si nous éditons, ne pas envoyer les champs non modifiés
    const dataToSubmit = initialData?.id 
      ? {
          id: initialData.id,
          ...(formData.name !== initialData.name && { name: formData.name }),
          ...(formData.email !== initialData.email && { email: formData.email }),
          ...(formData.password && { password: formData.password }),
          ...(formData.role !== initialData.role && { role: formData.role })
        }
      : formData;

    try {
      await onSubmit(dataToSubmit);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <S.FormOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <S.FormContainer>
        <S.FormTitle>
          {initialData ? 'Modifier' : 'Créer'} un utilisateur
        </S.FormTitle>
        
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="name">Nom</S.Label>
            <S.Input
              id="name"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required={!initialData}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required={!initialData}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="password">
              {initialData ? 'Nouveau mot de passe (optionnel)' : 'Mot de passe'}
            </S.Label>
            <S.Input
              id="password"
              type="password"
              value={formData.password}
              onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
              required={!initialData}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="role">Rôle</S.Label>
            <S.Select
              id="role"
              value={formData.role}
              onChange={e => setFormData(prev => ({ ...prev, role: e.target.value as Role }))}
            >
              <option value={Role.PILOT}>Pilote</option>
              <option value={Role.COMPANY}>Entreprise</option>
            </S.Select>
          </S.FormGroup>

          <S.ButtonGroup>
            <S.Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Annuler
            </S.Button>
            <S.Button type="submit" disabled={isLoading}>
              {isLoading ? 'Chargement...' : initialData ? 'Modifier' : 'Créer'}
            </S.Button>
          </S.ButtonGroup>
        </form>
      </S.FormContainer>
    </S.FormOverlay>
  );
};

export default UserForm;