import React, { useRef } from 'react';
import { Container, Section } from './mainPage.styled';
import { WelcomePage } from '../WelcomePage/WelcomePage';
import { TamdemPage } from 'pages/TamdemPage/TamdemPage';

const MainPage: React.FC = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  return (
    <Container>
      {/* Store references to each section */}
      <Section ref={(el) => el && (sectionsRef.current[0] = el)} id="acceuil">
        <WelcomePage />
      </Section>
      <Section ref={(el) => el && (sectionsRef.current[1] = el)} id="vol biplace">
        <TamdemPage />
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