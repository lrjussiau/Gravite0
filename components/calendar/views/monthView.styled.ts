import styled from 'styled-components';
import { colors } from 'styles/color';

export const MonthCell = styled.div`
  width: 100%;
  height: 100%;
  padding: 2px 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  /* Styles de fond dynamiques */
  &.no-bookings {
    background-color: #fff; /* Blanc */
  }

  &.low-bookings {
    background-color: #f7fbfc; /* Bleu clair */
  }

  &.medium-bookings {
    background-color: #cce5f5; /* Bleu moyen */
  }

  &.fully-booked {
    background-color: #6fb3e0; /* Bleu foncé */
  }

  /* Style pour les cellules du mois courant */
  &.current-month {
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  /* Style pour les cellules du jour actuel */
  &.today {
    border: 2px solid #2196f3; /* Contour bleu pour aujourd'hui */
  }
`;

export const DateContent = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.85rem;
  color: ${colors.primary};
`;