import React from 'react';
import WhatsAppIcon from 'assets/medias/whatsapp.png';
import { ButtonContainer, WhatsAppButtonStyled, Icon } from './whatsApp.styled';


const WhatsAppButton: React.FC = () => {
  return (
    <ButtonContainer>
      <WhatsAppButtonStyled>
        <Icon src={WhatsAppIcon} alt="WhatsApp" />
      </WhatsAppButtonStyled>
    </ButtonContainer>
  );
};

export default WhatsAppButton;
