import i18n from 'i18next';

const navItemKeys = [
  'nav.acceuil',
  'nav.vol_biplace',
  'nav.qui_sommes_nous',
  'nav.contact'
];

const sectionIds = ['acceuil', 'vol biplace', 'qui sommes-nous ?', 'contact'];

export const getTranslatedNavItems = () => {
  return navItemKeys.map((key) => ({
    label: i18n.t(key) || key,
    id: sectionIds[navItemKeys.indexOf(key)], 
  }));
};

export const navItems = getTranslatedNavItems();
