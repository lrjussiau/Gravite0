import { DiscoverButtonContainer, TextDiscover, PositionButton } from "./DiscoverButton.styled";
import { useScrollLock } from "../../utils/useScroll";
import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

export const DiscoverButton = () => {
  const { t } = useTranslation();
  const { currentSection, setCurrentSection } = useScrollLock(1000);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('section'));
  }, []);

  const handleClick = () => {
    const totalSections = sectionsRef.current.length;
    const nextSection = (currentSection + 1) % totalSections;
    
    sectionsRef.current[nextSection]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    };
  return (
      <DiscoverButtonContainer onClick={handleClick}>
          <TextDiscover>{t('welcome.decouvrir')}</TextDiscover>
      </DiscoverButtonContainer>
  );
}