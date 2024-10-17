import styled from 'styled-components';

export const ButtonContainer = styled.div`
  z-index: 1;
`;

export const WhatsAppButtonStyled = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid #fff;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
