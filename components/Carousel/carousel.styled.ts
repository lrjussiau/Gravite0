import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/DeviceDetect';
import { colors } from 'styles/color';

interface CarouselContainerProps {
  $height: string;
  $width: string;
  $dots: boolean;
}

interface SlideContainerProps {
    $isActive: boolean;
    $position: 'left' | 'right';
    $mobileWidth: string;
}

interface NavigationButtonProps {
  $position: 'left' | 'right';
  $isActive: boolean;
}

interface DotDisplayProps {
  $isActive: boolean;
}

interface DotButtonProps {
  $active: boolean;
}

export const CarouselContainer = styled.div<CarouselContainerProps>`
  position: relative;
  width: ${props => props.$width};
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: ${props => props.$dots ? '0' : '2%'};
  touch-action: pan-y pinch-zoom;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    height: ${props => props.$height};
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 0;
  }
`;

export const SlidesWrapper = styled.div<{ $currentslide: number }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
  touch-action: pan-x;
  user-select: none;
  
  @media (max-width: ${BREAKPOINTS.mobile}px) {
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }
`;

export const SlideContainer = styled.div<SlideContainerProps>`
  position: absolute;
  height: 98%;
  width: 75%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    width: ${props => props.$mobileWidth};
    transition: all 0.3s ease;
    left: ${props => {
      if (props.$position === 'left') {
        return props.$isActive ? `${(100 - parseInt(props.$mobileWidth))/2}%` : '-80%';
      }
      return props.$isActive ? `${(100 - parseInt(props.$mobileWidth))/2}%` : '95%';
    }};
  }
  
  left: ${props => {
    if (props.$position === 'left') {
      return props.$isActive ? '12.5%' : '-60%';
    }
    return props.$isActive ? '12.5%' : '85%';
  }};

  transform: scale(${props => props.$isActive ? 1 : 0.85});
  opacity: ${props => props.$isActive ? 1 : 0.3};
  filter: blur(${props => props.$isActive ? 0 : 3}px);
  z-index: ${props => props.$isActive ? 2 : 1};
`;

export const NavigationButton = styled.button<NavigationButtonProps>`
  position: absolute;
  top: 50%;
  ${props => props.$position}: 1rem;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: ${props => props.$isActive ? 'flex' : 'none'}; // Contrôle de la visibilité
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 3;

  &:hover {
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    display: none;
    transform: none;
    width: 32px;
    height: 32px;
    ${props => props.$position}: 1.8rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
`;

export const DotsContainer = styled.div<DotDisplayProps>`

  display: ${props => props.$isActive ? 'flex' : 'none'};;
  justify-content: center;
  gap: 0.5rem;
  z-index: 3;
  width: auto;
  height: auto;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

export const DotButton = styled.button<DotButtonProps>`
  width: ${props => props.$active ? '24px' : '12px'};
  height: 12px;
  border-radius: 6px;
  background-color: ${props => props.$active ? colors.primary : '#E0E0E0'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$active ? colors.primary : '#BDBDBD'};
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    height: 6px;
    width: ${props => props.$active ? '16px' : '8px'};
  }
`;