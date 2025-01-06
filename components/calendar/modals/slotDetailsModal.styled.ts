import styled from 'styled-components';
import { colors } from 'styles/color';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.primary};
    border-radius: 4px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  color: #666;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333;
  }
`;

export const FlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FlightCard = styled.li`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
`;

export const FlightInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FlightActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'danger' | 'default' }>`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: ${colors.primary};
          color: white;
          &:hover:not(:disabled) {
            background: ${colors.primary}dd;
          }
          &:disabled {
            background: ${colors.primary};
          }
        `;
      case 'danger':
        return `
          background: #dc3545;
          color: white;
          &:hover:not(:disabled) {
            background: #c82333;
          }
          &:disabled {
            background: #dc3545;
          }
        `;
      default:
        return `
          background: #e9ecef;
          color: #495057;
          &:hover:not(:disabled) {
            background: #dee2e6;
          }
          &:disabled {
            background: #e9ecef;
          }
        `;
    }
  }}
`;

export const Form = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #495057;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const StatusBadge = styled.span<{ $status: 'PENDING' | 'BOOKED' | 'COMPLETED' | 'CANCELED' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;

  ${({ $status }) => {
    switch ($status) {
      case 'PENDING':
        return 'background: #fff3cd; color: #856404;';
      case 'BOOKED':
        return 'background: #d4edda; color: #155724;';
      case 'COMPLETED':
        return 'background: #cce5ff; color: #004085;';
      case 'CANCELED':
        return 'background: #f8d7da; color: #721c24;';
    }
  }}
`;