type DeviceProps = {
  smallMobile?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
};

export interface TypographyProps {
  $centered?: boolean;
  $fontWeight?: string;
  $margin?: string | DeviceProps;
  $color?: string;
  $fontSize?: string | DeviceProps;
  $align?: string | DeviceProps;
  $lineHeight?: string | DeviceProps;
}