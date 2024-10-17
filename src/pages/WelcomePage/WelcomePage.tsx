import LanguageSelector from "../../components/Language/Language";
import { WelcomePageContainer , ImageBackground, ButtonContainer } from "./welcomePage.styled";
import ScrollDownButton from "components/ScrollDownButton/ScrollDownButton";
import { DiscoverButton } from "components/DiscoverButton/DiscoverButton";
import WhatsAppButton from "components/WhatsApp/WhatsApp";
import backGround from "assets/medias/header_welcome.jpg";

export const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <ImageBackground src={backGround} alt="background" />
      <ButtonContainer>
        <LanguageSelector />
        <DiscoverButton />
        <WhatsAppButton />
      </ButtonContainer>
    </WelcomePageContainer>
  );
}