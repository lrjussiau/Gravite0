import React from 'react';
import { ButtonContainer, WhatsAppButtonStyled, ImageWrapper} from './whatsApp.styled';
import Image from 'next/image';

const WhatsAppButton: React.FC = () => {
  return (
    <ButtonContainer>
      <WhatsAppButtonStyled>
        <ImageWrapper>
          <Image
              src="/images/whatsapp.png"
              alt="WhatsApp"
              fill
              sizes="100%"
              style={{ objectFit: 'cover' }}
            />
        </ImageWrapper>
      </WhatsAppButtonStyled>
    </ButtonContainer>
  );
};

export default WhatsAppButton;
