import styled from 'styled-components';
import { ContainerProps, BoxProps } from './types';
import { BREAKPOINTS } from 'utils/DeviceDetect';
import { DEFAULT_CONTAINER_VALUES } from './constants';

interface ResponsiveValue {
  default: string;
  tablet?: string;
  mobile?: string;
  smallMobile?: string;
}
  
export const getResponsiveValue = (
    prop: string | { smallMobile?: string; mobile?: string; tablet?: string; desktop?: string } | undefined,
    defaultValues: { desktop: string; tablet: string; mobile: string; smallMobile: string }
  ): ResponsiveValue => {
    if (!prop) return {
      default: defaultValues.desktop,
      tablet: defaultValues.tablet,
      mobile: defaultValues.mobile
    };
  
    if (typeof prop === 'string') return {
      default: prop,
      tablet: prop,
      mobile: prop
    };
  
    return {
      default: prop.desktop || defaultValues.desktop,
      tablet: prop.tablet || defaultValues.tablet,
      mobile: prop.mobile || defaultValues.mobile
    };
  };

  export const PageContainer = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: ${props => props.$direction || 'column'};
  align-items: center;
  justify-content: ${props => props.$centered ? 'center' : 'flex-start'};
  height: ${props => getResponsiveValue(props.$height, DEFAULT_CONTAINER_VALUES.page.height).default};
  width: ${props => getResponsiveValue(props.$width, DEFAULT_CONTAINER_VALUES.page.width).default};
  padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.page.padding).default};
  gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.page.gap).default};
  background-color: ${props => props.$backgroundColor || 'transparent'};
  padding-top: ${props => getResponsiveValue(props.$paddingTop, DEFAULT_CONTAINER_VALUES.page.paddingTop).default};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    height: ${props => getResponsiveValue(props.$height, DEFAULT_CONTAINER_VALUES.page.height).tablet};
    width: ${props => getResponsiveValue(props.$width, DEFAULT_CONTAINER_VALUES.page.width).tablet};
    padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.page.padding).tablet};
    gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.page.gap).tablet};
    padding-top: ${props => getResponsiveValue(props.$paddingTop, DEFAULT_CONTAINER_VALUES.page.paddingTop).tablet};
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    height: ${props => getResponsiveValue(props.$height, DEFAULT_CONTAINER_VALUES.page.height).mobile};
    width: ${props => getResponsiveValue(props.$width, DEFAULT_CONTAINER_VALUES.page.width).mobile};
    padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.page.padding).mobile};
    gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.page.gap).mobile};
    padding-top: ${props => getResponsiveValue(props.$paddingTop, DEFAULT_CONTAINER_VALUES.page.paddingTop).mobile};
  }
`;

export const ContentContainer = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: ${props => getResponsiveValue(props.$direction, DEFAULT_CONTAINER_VALUES.content.direction).default};
  align-items: center;
  background-color: ${props => props.$backgroundColor || 'transparent'};
  background: ${props => props.$background || ''};
  justify-content: ${props => props.$centered ? 'center' : 'flex-start'};
  justify-content: ${props => props.$justify || 'flex-start'};
  max-width: ${props => props.$maxWidth || '100%'};
  height: ${props => getResponsiveValue(props.$height, DEFAULT_CONTAINER_VALUES.content.height).default};
  width: ${props => getResponsiveValue(props.$width, DEFAULT_CONTAINER_VALUES.content.width).default};
  gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.content.gap).default};
  padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.content.padding).default};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    flex-direction: ${props => getResponsiveValue(props.$direction, DEFAULT_CONTAINER_VALUES.content.direction).tablet};
    width: ${props => getResponsiveValue(props.$width, DEFAULT_CONTAINER_VALUES.content.width).tablet};
    gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.content.gap).tablet};
    padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.content.padding).tablet};
    height: ${props => getResponsiveValue(props.$height, DEFAULT_CONTAINER_VALUES.content.height).tablet};
    justify-content: ${props => getResponsiveValue(props.$justify, DEFAULT_CONTAINER_VALUES.content.justify).tablet};
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    flex-direction: ${props => getResponsiveValue(props.$direction, DEFAULT_CONTAINER_VALUES.content.direction).mobile};
    width: ${props => getResponsiveValue(props.$width, DEFAULT_CONTAINER_VALUES.content.width).mobile};
    gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.content.gap).mobile};
    padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.content.padding).mobile};
    height: ${props => getResponsiveValue(props.$height, DEFAULT_CONTAINER_VALUES.content.height).mobile};
    justify-content: ${props => getResponsiveValue(props.$justify, DEFAULT_CONTAINER_VALUES.content.justify).mobile};
  }
`;


export const BoxContainer = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${props => getResponsiveValue(props.$direction, DEFAULT_CONTAINER_VALUES.box.direction).default};
  align-items: center;
  justify-content: space-around;
  width: ${props => getResponsiveValue(props.$width, DEFAULT_CONTAINER_VALUES.box.width).default};
  height: ${props => getResponsiveValue(props.$height, DEFAULT_CONTAINER_VALUES.box.height).default};
  border-radius: ${props => props.$radius || '20px'};
  background-color: ${props => props.$backgroundColor || '#F5F5F5'};
  box-shadow: ${props => props.$shadow ? '0px 4px 10px rgba(0, 0, 0, 0.3)' : 'none'};
  gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.box.gap).default};
  padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.box.padding).default};
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    flex-direction: ${props => getResponsiveValue(props.$direction, DEFAULT_CONTAINER_VALUES.box.direction).tablet};
    gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.box.gap).tablet};
    padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.box.padding).tablet};
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    flex-direction: ${props => getResponsiveValue(props.$direction, DEFAULT_CONTAINER_VALUES.box.direction).mobile};
    gap: ${props => getResponsiveValue(props.$gap, DEFAULT_CONTAINER_VALUES.box.gap).mobile};
    padding: ${props => getResponsiveValue(props.$padding, DEFAULT_CONTAINER_VALUES.box.padding).mobile};
  }
`;