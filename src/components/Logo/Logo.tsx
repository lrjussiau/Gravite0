import { LogoContainer, LogoImage } from "./Logo.styled";
import logoImage from '../../assets/media/Logo.png';

const Logo = () => {
  return (
    <LogoContainer>
        <LogoImage src={logoImage} alt="Logo" />
    </LogoContainer>
  );
}

export default Logo;