import React, { useRef } from 'react';
import { Container, Section } from './mainPage.styled';
import { WelcomePage } from '../WelcomePage';
import { TamdemPage } from '../TamdemPage';
import { WhoAreWePage } from '../WhoAreWePage';
import { FormationPage } from '../FormationPage';
import { ContactPage } from '../ContactPage';
import NavBar from 'components/NavBar';
import Logo from 'components/Logo';

const MainPage: React.FC = () => {
  const welcomeRef = useRef<HTMLElement | null>(null);
  const tandemRef = useRef<HTMLElement | null>(null);
  const formationRef = useRef<HTMLElement | null>(null);
  const whoAreWeRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <Container>
      <Logo />
      <NavBar />
      <Section ref={welcomeRef} id="welcome">
        <WelcomePage />
      </Section>
      <Section ref={tandemRef} id="tandem">
        <TamdemPage />
      </Section>
      <Section ref={formationRef} id="formation">
        <FormationPage />
      </Section>
      <Section ref={whoAreWeRef} id="about">
        <WhoAreWePage />
      </Section>
      <Section ref={contactRef} id="contact">
        <ContactPage />
      </Section>
    </Container>
  );
};

export default MainPage;
