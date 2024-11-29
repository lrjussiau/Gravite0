import styled, { keyframes } from 'styled-components';
import { colors } from 'styles/color';
import { BREAKPOINTS } from 'utils/DeviceDetect';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const ContentPanel = styled.div<{ $isVisible: boolean }>`
  opacity: ${props => props.$isVisible ? 1 : 0};
  height: 80%;
  width: 90%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  animation: ${props => props.$isVisible ? fadeIn : fadeOut} 0.3s ease forwards;
  overflow: hidden;

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        width: 99%;
    }
    

`;

export const TeamMemberContainer = styled.div<{ $position: 'left' | 'center' | 'right', $isActive: boolean }>`
  position: absolute;
  width: ${props => props.$isActive ? '100px' : '75px'};
  height: ${props => props.$isActive ? '100px' : '75px'};
  transition: all 0.5s ease;
  transform: ${props => {
    switch(props.$position) {
      case 'left': return 'translateX(-90%) scale(0.8)';
      case 'center': return 'translateX(-50%)  translateY(20%) scale(1)';
      case 'right': return 'translateX(0%) scale(0.8)';
    }
  }};
  left: ${props => {
    switch(props.$position) {
      case 'left': return '25%';
      case 'center': return '50%';
      case 'right': return '75%';
    }
  }};
  opacity: ${props => props.$isActive ? 1 : 0.5};
  z-index: ${props => props.$isActive ? 2 : 1};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid ${colors.primary};
`;

export const NavigationButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$position}: 10%;
  transform: translateY(-50%) translateX(${props => props.$position === 'left' ? '-50%' : '50%'});
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 3;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`;

export const ImageCardContainer = styled.div`
    position: relative;
    height: 40%;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid ${colors.primary};
`;

export const LogoContainer = styled.div`
    position: relative;

    height: 40%;
    width: auto;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
`;