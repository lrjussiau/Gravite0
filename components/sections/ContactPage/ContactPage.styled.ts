import styled from "styled-components";
import { colors } from "styles/color";
import { BREAKPOINTS } from 'utils/DeviceDetect';

export const Footer = styled.footer`
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    background-color: #09090909;
    border-top: 1px solid ${colors.primary};
`;

export const ItemPlacer = styled.div`
    position: absolute;
    z-index: 1000;
    left: 0;
    bottom: 0;
    width: 90%;

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        bottom: 5%;
    }

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        display: none;
    }
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #09090985;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    padding: 3%;
    width: fit-content;
    margin: 3%;
    border-radius: 10px;
    gap: 10px;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentWrapper = styled.div<{ $visible: boolean }>`
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: ${colors.primaryHover};
    transform: scale(1.05);
    transition: all 0.2s ease;
  }

  &:focus {
    outline: none;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  height: 100%;
  border-left: 1px solid ${colors.primary};
  position: relative;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    height: 80%;
    border-left: none;
  }
`;

export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
    padding: 10px;
    gap: 10px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
        scale: 1.1;
        transition: all 0.3s ease;
    }
`;

export const Content = styled.div<{ $visible?: boolean }>`
    height: 100%;
    width: 100%;
    padding: 5%;
    opacity: ${props => props.$visible === false ? 0 : 1};
    visibility: ${props => props.$visible === false ? 'hidden' : 'visible'};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    transition-delay: ${props => props.$visible ? '0.3s' : '0s'};
    ${props => props.$visible === false && `
        position: absolute;
        pointer-events: none;
    `}
`;