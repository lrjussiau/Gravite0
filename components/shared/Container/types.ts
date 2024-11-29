import { ReactNode } from 'react';

type DeviceProps = {
  smallMobile?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
};

export interface ContainerProps {
  $fullHeight?: boolean;
  $centered?: boolean;
  $direction?: string | DeviceProps;
  $justify?: string | DeviceProps;
  $gap?: string | DeviceProps;
  $padding?: string | DeviceProps;
  $width?: string | DeviceProps;
  $height?: string | DeviceProps;
  $backgroundColor?: string;
  $background?: string;
  $paddingTop?: string | DeviceProps;
  $maxWidth?: string;
  children: ReactNode;
}

export interface BoxProps {
  $shadow?: boolean;
  $direction?: string | DeviceProps;
  $gap?: string | DeviceProps;
  $padding?: string | DeviceProps;
  $width?: string | DeviceProps;
  $height?: string | DeviceProps;
  $backgroundColor?: string;
  $radius?: string;
  children: ReactNode;
}