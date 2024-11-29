import { DiscoverButtonContainer } from "./DiscoverButton.styled";
import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { Text } from "components/shared/Typography";

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
      nextSection = 0;
    }

    sectionsRef.current[nextSection]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <DiscoverButtonContainer onClick={handleClick}>
      <Text color="white" $fontSize={{smallMobile:'1.2rem', mobile:'1.3rem', tablet:'1.4rem', desktop:'1.5rem'}}>{t('welcome.reserver_votre_vol')}</Text>
    </DiscoverButtonContainer>
  );
};
