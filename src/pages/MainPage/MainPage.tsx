import React, { useRef, useEffect } from 'react';
import { Container, Section } from './mainPage.styled';
import { useScrollLock } from '../../utils/useScroll';
import { WelcomePage } from '../WelcomePage/WelcomePage';

const MainPage: React.FC = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const { canScroll, setCurrentSection, currentSection } = useScrollLock(1000);

  useEffect(() => {
    sectionsRef.current[currentSection]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [currentSection]);

  return (
    <Container>
      {/* Store references to each section */}
      <Section ref={(el) => el && (sectionsRef.current[0] = el)} id="acceuil" style={{ backgroundColor: '#E57373' }}>
        <WelcomePage />
      </Section>
      <Section ref={(el) => el && (sectionsRef.current[1] = el)} id="vol biplace" style={{ backgroundColor: '#64B5F6' }}>
        <h1>Vol Biplace</h1>
      </Section>
      <Section ref={(el) => el && (sectionsRef.current[2] = el)} id="qui sommes-nous ?" style={{ backgroundColor: '#81C784' }}>
        <h1>Qui sommes-nous ?</h1>
      </Section>
      <Section ref={(el) => el && (sectionsRef.current[3] = el)} id="contact" style={{ backgroundColor: '#FFD54F' }}>
        <h1>Contact</h1>
      </Section>
    </Container>
  );
};

export default MainPage;
