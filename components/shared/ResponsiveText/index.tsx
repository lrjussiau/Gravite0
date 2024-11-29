import React, { useState, useEffect } from 'react';
import { Text } from 'components/shared/Typography';
import useDeviceDetect from 'utils/DeviceDetect';
import { ResponsiveTextProps } from './types';
import { useTranslation } from 'react-i18next';

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({ 
  $mobile, 
  $desktop,
  ...textProps 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isDesktop } = useDeviceDetect();
  const { t } = useTranslation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getText = (text: string) => {
    return text.startsWith('common.') || text.includes('.') ? t(text) : text;
  };

  // Rendu initial sécurisé pour le serveur
  if (!isMounted) {
    return <Text {...textProps}>{getText($desktop)}</Text>;
  }

  // Rendu côté client avec détection de device
  if (!isDesktop && $mobile) {
    return <Text {...textProps}>{getText($mobile)}</Text>;
  }

  return <Text {...textProps}>{getText($desktop)}</Text>;
};