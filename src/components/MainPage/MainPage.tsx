import { Container, Section } from './MainPage.styled';

const MainPage: React.FC = () => {
    return (
      <Container>
        <Section style={{ backgroundColor: '#E57373' }} id="acceuil">
          <h1>Acceuil</h1>
        </Section>
        <Section style={{ backgroundColor: '#64B5F6' }} id="vol biplace">
          <h1>Vol Biplace</h1>
        </Section>
        <Section style={{ backgroundColor: '#81C784' }} id="qui sommes-nous ?">
          <h1>Qui sommes-nous ?</h1>
        </Section>
        <Section style={{ backgroundColor: '#FFD54F' }} id="contact">
          <h1>Contact</h1>
        </Section>
      </Container>
    );
  };
  
  export default MainPage;