// components/UserManagement/UserManagement.tsx
import React, { useState } from 'react';
import { User as UserIcon, UserPlus, Edit2 } from 'lucide-react';
import { Role, User, CreateUserDto, UpdateUserDto } from '../types/users';
import { useUserManagement } from '../hooks/useUserManagement';
import UserForm from './UserForm';
import * as S from './UserManagement.styled';
import { TabButton } from './UserManagement.styled';

export interface UserFormData {
  name: string;
  email: string;
  password?: string;
  role: Role;
  id?: number;
}

const UserManagement = () => {
  const {
    filteredUsers,
    isLoading,
    error,
    activeTab,
    setActiveTab,
    createUser,
    updateUser,
    deleteUser
  } = useUserManagement();

  const [showForm, setShowForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedUser) {
      await deleteUser(selectedUser.id);
      setShowDeleteDialog(false);
      setSelectedUser(null);
    }
  };

  const handleFormSubmit = async (formData: CreateUserDto | (UpdateUserDto & { id: number })) => {
    if ('id' in formData) {
      await updateUser(formData.id, formData);
    } else {
      await createUser(formData);
    }
    setShowForm(false);
  };

  if (error) {
    return <div style={{ color: 'red', padding: '1rem' }}>{error}</div>;
  }

  return (
    <S.Container>
      {/* Tabs */}
      <S.TabsContainer>
        <TabButton
          $isActive={activeTab === Role.PILOT}
          onClick={() => setActiveTab(Role.PILOT)}
        >
          Pilotes
        </TabButton>
        <TabButton
          $isActive={activeTab === Role.COMPANY}
          onClick={() => setActiveTab(Role.COMPANY)}
        >
          Entreprises
        </TabButton>
        <S.ButtonContainer>
          <TabButton onClick={handleAddUser}>
            <UserPlus size={20} />
            Ajouter
          </TabButton>
        </S.ButtonContainer>
      </S.TabsContainer>

      {/* User List */}
      <S.UserList>
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '1rem' }}>Chargement...</div>
        ) : filteredUsers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1rem', color: '#666' }}>
            Aucun {activeTab === Role.PILOT ? "pilote" : "entreprise"} trouvé
          </div>
        ) : (
          filteredUsers.map((user) => (
            <S.UserCard key={user.id}>
              <S.UserInfo>
                <UserIcon size={32} color="#666" />
                <S.UserDetails>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </S.UserDetails>
              </S.UserInfo>
              <S.Actions>
                <S.IconButton onClick={() => handleEditUser(user)}>
                  <Edit2 size={16} />
                </S.IconButton>
              </S.Actions>
            </S.UserCard>
          ))
        )}
      </S.UserList>

      {/* User Form Modal */}
      <UserForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleFormSubmit}
        initialData={selectedUser || undefined}
        isLoading={isLoading}
      />

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <S.DeleteDialog onClick={(e) => e.target === e.currentTarget && setShowDeleteDialog(false)}>
          <S.DeleteDialogContent>
            <h2>Confirmer la suppression</h2>
            <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.</p>
            <S.ButtonGroup>
              <S.Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                Annuler
              </S.Button>
              <S.Button onClick={handleDeleteConfirm}>
                Supprimer
              </S.Button>
            </S.ButtonGroup>
          </S.DeleteDialogContent>
        </S.DeleteDialog>
      )}
    </S.Container>
  );
};

export default UserManagement;