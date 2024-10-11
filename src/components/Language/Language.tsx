import React, { useState, useEffect } from 'react';
import { LanguageContainer, LanguageButton } from './language.styled';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation(); 
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  useEffect(() => {
    setActiveLanguage(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <LanguageContainer>
      <LanguageButton
        isActive={activeLanguage === 'en'}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </LanguageButton>
      <LanguageButton
        isActive={activeLanguage === 'fr'}
        onClick={() => handleLanguageChange('fr')}
      >
        FR
      </LanguageButton>
      <LanguageButton
        isActive={activeLanguage === 'de'}
        onClick={() => handleLanguageChange('de')}
      >
        DE
      </LanguageButton>
    </LanguageContainer>
  );
};

export default LanguageSelector;
