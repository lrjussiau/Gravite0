// components/UserForm/UserForm.styled.ts
import styled from 'styled-components';

export const FormOverlay = styled.div`
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

export const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 425px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #56A9FF;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #56A9FF;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
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