import styled from 'styled-components';
import { typography } from '../../../styles/typography';
import { TypographyProps } from './types';
import { BREAKPOINTS } from 'utils/DeviceDetect';
import { DEFAULT_TYPOGRAPHY_VALUES } from './constants';

interface ResponsiveValue {
  default: string;
  tablet?: string;
  mobile?: string;
  smallMobile?: string;
}

const getResponsiveTypography = (
  prop: string | { smallMobile?: string; mobile?: string; tablet?: string; desktop?: string } | undefined,
  defaultValues: { desktop: string; tablet: string; mobile: string; smallMobile: string }
): ResponsiveValue => {
  if (!prop) return {
    default: defaultValues.desktop,
    tablet: defaultValues.tablet,
    mobile: defaultValues.mobile,
    smallMobile: defaultValues.smallMobile
  };
  
  if (typeof prop === 'string') return { 
    default: prop,
    tablet: prop,
    mobile: prop,
    smallMobile: prop
  };
  
  return {
    default: prop.desktop || defaultValues.desktop,
    tablet: prop.tablet || defaultValues.tablet,
    mobile: prop.mobile || defaultValues.mobile,
    smallMobile: prop.smallMobile || defaultValues.smallMobile
  };
};

const getValue = (responsiveValue: ResponsiveValue, breakpoint: 'default' | 'tablet' | 'mobile' | 'smallMobile'): string => {
  if (breakpoint === 'smallMobile') return responsiveValue.smallMobile || responsiveValue.mobile || responsiveValue.tablet || responsiveValue.default;
  if (breakpoint === 'mobile') return responsiveValue.mobile || responsiveValue.tablet || responsiveValue.default;
  if (breakpoint === 'tablet') return responsiveValue.tablet || responsiveValue.default;
  return responsiveValue.default;
};

export const Title = styled.h1<TypographyProps>`
  ${typography.h1};
  text-align: ${props => props.$centered ? 'center' : 'left'};
  color: ${props => props.color || typography.h1.color};
  font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.title.fontSize), 'default')};
  margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.title.margin), 'default')};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.title.fontSize), 'tablet')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.title.margin), 'tablet')};
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.title.fontSize), 'mobile')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.title.margin), 'mobile')};
  }

  @media (max-width: ${BREAKPOINTS.smallMobile}px) {
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.title.fontSize), 'smallMobile')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.title.margin), 'smallMobile')};
  }
`;

export const SubTitle = styled.h2<TypographyProps>`
  ${typography.h2};
  text-align: ${props => props.$centered ? 'center' : 'left'};
  color: ${props => props.color || typography.h2.color};
  font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.subtitle.fontSize), 'default')};
  margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.subtitle.margin), 'default')};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.subtitle.fontSize), 'tablet')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.subtitle.margin), 'tablet')};
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.subtitle.fontSize), 'mobile')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.subtitle.margin), 'mobile')};
  }

  @media (max-width: ${BREAKPOINTS.smallMobile}px) {
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.subtitle.fontSize), 'smallMobile')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.subtitle.margin), 'smallMobile')};
  }
`;

export const Text = styled.p<TypographyProps>`
  ${typography.body};
  width: 100%;
  display: block;
  text-align: ${props => props.$centered ? 'center' : (
    getValue(getResponsiveTypography(props.$align, DEFAULT_TYPOGRAPHY_VALUES.text.align), 'default')
  )};
  color: ${props => props.color || typography.body.color};
  font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.text.fontSize), 'default')};
  margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.text.margin), 'default')};
  line-height: ${props => getValue(getResponsiveTypography(props.$lineHeight, DEFAULT_TYPOGRAPHY_VALUES.text.lineHeight), 'default')};
  font-weight: ${props => props.$fontWeight || typography.body.fontWeight};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    /* Keep same pattern in media queries */
    text-align: ${props => props.$centered ? 'center' : (
      getValue(getResponsiveTypography(props.$align, DEFAULT_TYPOGRAPHY_VALUES.text.align), 'tablet')
    )};
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.text.fontSize), 'tablet')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.text.margin), 'tablet')};
    line-height: ${props => getValue(getResponsiveTypography(props.$lineHeight, DEFAULT_TYPOGRAPHY_VALUES.text.lineHeight), 'tablet')};
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    text-align: ${props => props.$centered ? 'center' : (
      getValue(getResponsiveTypography(props.$align, DEFAULT_TYPOGRAPHY_VALUES.text.align), 'mobile')
    )};
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.text.fontSize), 'mobile')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.text.margin), 'mobile')};
    line-height: ${props => getValue(getResponsiveTypography(props.$lineHeight, DEFAULT_TYPOGRAPHY_VALUES.text.lineHeight), 'mobile')};
  }

  @media (max-width: ${BREAKPOINTS.smallMobile}px) {
    text-align: ${props => props.$centered ? 'center' : (
      getValue(getResponsiveTypography(props.$align, DEFAULT_TYPOGRAPHY_VALUES.text.align), 'smallMobile')
    )};
    font-size: ${props => getValue(getResponsiveTypography(props.$fontSize, DEFAULT_TYPOGRAPHY_VALUES.text.fontSize), 'smallMobile')};
    margin: ${props => getValue(getResponsiveTypography(props.$margin, DEFAULT_TYPOGRAPHY_VALUES.text.margin), 'smallMobile')};
    line-height: ${props => getValue(getResponsiveTypography(props.$lineHeight, DEFAULT_TYPOGRAPHY_VALUES.text.lineHeight), 'smallMobile')};
  }
`;