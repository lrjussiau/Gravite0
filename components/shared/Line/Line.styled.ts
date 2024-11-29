import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/DeviceDetect';

interface VerticalLineProps {
  $height?: string;
  $width?: string;
  $color?: string;
  $margin?: string;
  $mobile?: boolean;
  $tablet?: boolean;
}

interface HorizontalLineProps {
  $height?: string;
  $width?: string;
  $color?: string;
  $margin?: string;
  $mobile?: boolean;
}

export const VerticalLine = styled.div<VerticalLineProps>`
  width: ${props => props.$width || '1px'};
  height: ${props => props.$height || '100%'};
  background-color: ${props => props.$color || '#E0E0E0'};
  margin: ${props => props.$margin || '0 20px'};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: ${props => props.$tablet ? 'block' : 'none'};
  }
  
  @media (max-width: ${BREAKPOINTS.mobile}px) {
    display: ${props => props.$mobile ? 'block' : 'none'};
  }
`;

export const HorizontalLine = styled.div<HorizontalLineProps>`
  width: ${props => props.$width || '100%'};
  padding: ${props => props.$height || '0px'};
  background-color: ${props => props.$color || '#E0E0E0'};
  margin: ${props => props.$margin || '20px 0'};

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    display: ${props => props.$mobile ? 'block' : 'none'};
  }
`;