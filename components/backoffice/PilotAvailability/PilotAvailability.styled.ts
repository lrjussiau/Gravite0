import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/DeviceDetect';

export const CalendarContainer = styled.div`
  flex: 1;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .rbc-allday-cell {
    display: none;
}

  /* Personnalisation des styles de react-big-calendar */
  .rbc-event {
    padding: 2px 5px !important;
    min-height: 15px !important; // Réduction de la hauteur minimale
    font-size: 12px !important; // Réduction de la taille de la police
  }

  .rbc-timeslot-group {
    min-height: 30px !important; // Réduction de la hauteur des créneaux horaires
  }

  .rbc-allday-cell {
    max-height: 30px !important; // Réduction de la hauteur des créneaux horaires
  }

  .rbc-time-content {
    font-size: 12px;
  }

  .rbc-time-header-content {
    font-size: 12px;
  }

  .rbc-header {
    padding: 5px 3px !important;
  }

  .rbc-time-view {
    /* Si vous voulez réduire les marges internes */
    padding: 0 !important;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        flex-direction: column;
    }

`;

export const PilotList = styled.div`
  flex: 0 0 300px;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PilotItem = styled.div<{ $isSelected?: boolean }>`
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: ${({ $isSelected }) => ($isSelected ? '#56A9FF' : 'transparent')};
  color: ${({ $isSelected }) => ($isSelected ? 'white' : 'inherit')};
  margin-bottom: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? '#4A90E2' : '#f0f0f0')};
  }
`;

export const Legend = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 0.25rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LegendColor = styled.div<{ $color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: ${({ $color }) => $color};
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ActionButton = styled.button<{ $variant?: 'primary'; disabled?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ $variant, disabled }) => 
    disabled ? '#e0e0e0' : ($variant === 'primary' ? '#56A9FF' : '#f0f0f0')};
  color: ${({ $variant, disabled }) => 
    disabled ? '#999' : ($variant === 'primary' ? 'white' : '#666')};
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};

  &:hover {
    background-color: ${({ $variant, disabled }) => 
      disabled ? '#e0e0e0' : ($variant === 'primary' ? '#4A90E2' : '#e0e0e0')};
  }
`;

export const LoadingSpinner = styled.div`
  padding: 1rem;
  text-align: center;
  color: #666;
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  color: #ff4444;
  background-color: #ffe5e5;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

export const Modal = styled.div`
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

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 400px;
  max-width: 90%;

  h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }

  input[type="text"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
  }

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

