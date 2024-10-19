import { DiscoverButtonContainer, TextDiscover } from "./DiscoverButton.styled";
import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

export const DiscoverButton = () => {
  const { t } = useTranslation();
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('section'));
  }, []);

  const handleClick = () => {
    const totalSections = sectionsRef.current.length;
    const currentScrollPosition = window.scrollY;
    let nextSection = sectionsRef.current.findIndex(
      (section) => section.offsetTop > currentScrollPosition
    );

    if (nextSection === -1 || nextSection >= totalSections) {
      nextSection = 0; // If no further sections, go back to the first one
    }

    sectionsRef.current[nextSection]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <DiscoverButtonContainer onClick={handleClick}>
      <TextDiscover>{t('welcome.reserver_votre_vol')}</TextDiscover>
    </DiscoverButtonContainer>
  );
};
