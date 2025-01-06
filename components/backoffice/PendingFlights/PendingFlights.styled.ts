import styled from 'styled-components';
import { colors } from 'styles/color';

export const FlightCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FlightHeader = styled.div`
    border-bottom: 1px solid #eee;
`;

export const FlightInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

export const Value = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'danger' }>`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: ${colors.primary};
          color: white;
          &:hover {
            background-color: ${colors.primaryHover};
          }
        `;
      case 'danger':
        return `
          background-color: #FF5656;
          color: white;
          &:hover {
            background-color: #E24A4A;
          }
        `;
      default:
        return `
          background-color: #f0f0f0;
          color: #666;
          &:hover {
            background-color: #e0e0e0;
          }
        `;
    }
  }}
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const FlightContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2%;
    justify-content: center;
`;

export const PilotSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  background-color: white;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  min-width: 200px;
`;