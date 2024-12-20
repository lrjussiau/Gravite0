
import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/DeviceDetect';
import { colors } from 'styles/color';

export const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid #fff;
`;

export const LanguageButton = styled.button<{ $isactive: boolean }>`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  padding: 10px 15px;
  background-color: ${({ $isactive }) => ($isactive ? colors.primary : 'transparent')};
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  animation: fadeIn 1s;
  &:hover {
    color: ${({ $isactive }) => ($isactive ? '#fff' : colors.primary)};
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 0.7rem;
  }
`;