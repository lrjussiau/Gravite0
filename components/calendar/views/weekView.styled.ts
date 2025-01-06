import styled from 'styled-components';
import { View } from 'react-big-calendar';
import { BREAKPOINTS } from 'utils/DeviceDetect';
import { colors } from 'styles/color';

interface ViewWrapperProps {
  $viewType: View;
}

interface StatusProps {
  $status: 'disponible' | 'complet' | 'en attente';
  $viewType: View;
}

export const EventWrapper = styled.div<ViewWrapperProps>`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s ease;
  padding: ${({ $viewType }) => 
    $viewType === 'month' ? '0.25rem' : 
    $viewType === 'week' ? '0.2rem' : '1rem'};
  margin: ${({ $viewType }) => 
    $viewType === 'month' ? '0.125rem' : 
    $viewType === 'week' ? '0.2rem' : '0.5rem'};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.background};
  }
`;

export const ContentContainer = styled.div<ViewWrapperProps>`
  display: flex;
  flex-direction: ${({ $viewType }) => 
    $viewType === 'week' ? 'column' : 'row'};
  justify-content: ${({ $viewType }) => 
    $viewType === 'week' ? 'center' : 'space-between'};
  align-items: center;
  gap: 0.25rem;
  width: 100%;
`;

export const TimeContainer = styled.div<ViewWrapperProps>`
  display: flex;
  flex-direction: ${({ $viewType }) => 
    $viewType === 'week' ? 'column' : 'row'};
  align-items: center;
  gap: 0.2rem;
`;

export const Time = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.primary || '#2563eb'};
  font-size: 0.75rem;
`;

export const Status = styled.span<StatusProps>`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.6rem;
  white-space: nowrap;
  
  ${({ $viewType }) => $viewType === 'week' && `
    @media (max-width: ${BREAKPOINTS.mobile}px) {
      display: none;
    }
  `}

  ${({ $status }) => {
    switch ($status) {
      case 'disponible':
        return `
          background-color: #e8f5e9;
          color: #2e7d32;
        `;
      case 'complet':
        return `
          background-color:rgb(251, 208, 208);
          color:rgb(210, 25, 25);
        `;
      case 'en attente':
        return `
          background-color: #fff3e0;
          color: #f57c00;
        `;
    }
  }}
`;

export const InfoText = styled.span<ViewWrapperProps>`
  font-size: 0.75rem;
  color: #4b5563;
  text-align: center;
  ${({ $viewType }) => $viewType === 'week' && `
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;