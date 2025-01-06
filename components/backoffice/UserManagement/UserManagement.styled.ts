// components/UserManagement/UserManagement.styled.ts
import styled from 'styled-components';

export const TabButton = styled.button<{ $isActive?: boolean }>`
  padding: 0.75rem 1.5rem;
  margin-right: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ $isActive }) => ($isActive ? '#56A9FF' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? 'white' : '#666')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#56A9FF' : '#f0f0f0')};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
`;

export const UserList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserDetails = styled.div`
  h3 {
    font-weight: 500;
  }

  p {
    color: #666;
    font-size: 0.875rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const DeleteDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DeleteDialogContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1.5rem;
    color: #666;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'outline' }>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant = 'primary' }) =>
    variant === 'primary'
      ? `
    background-color: #56A9FF;
    color: white;
    border: none;
    
    &:hover {
      background-color: #4090ff;
    }
    `
      : `
    background-color: transparent;
    color: #666;
    border: 1px solid #ddd;
    
    &:hover {
      background-color: #f0f0f0;
    }
  `}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;