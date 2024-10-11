import i18n from 'i18next';

const navItemKeys = [
  'nav.acceuil',
  'nav.vol_biplace',
  'nav.qui_sommes_nous',
  'nav.contact'
];

export const getTranslatedNavItems = () => {
  return navItemKeys.map((key) => i18n.t(key) || key);
};

export const navItems = getTranslatedNavItems();
