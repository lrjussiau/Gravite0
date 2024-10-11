import LanguageSelector from "../../components/Language/Language";
import { WelcomePageContainer } from "./welcomePage.styled";

export const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <LanguageSelector />
      <h1>Welcome Page!</h1>
    </WelcomePageContainer>
  );
}