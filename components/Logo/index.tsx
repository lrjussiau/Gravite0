import { LogoContainer, ImageWrapper } from "./Logo.styled";
import Image from 'next/image';

const Logo = () => {
  return (
    <LogoContainer>
      <ImageWrapper>
        <Image 
          src="/images/Logo.png"
          alt="Logo"
          fill
          sizes="100%"
          priority={true}
          style={{ objectFit: 'contain' }}
          />
      </ImageWrapper>
    </LogoContainer>
  );
}

export default Logo;
