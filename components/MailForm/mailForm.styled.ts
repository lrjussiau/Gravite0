import styled from "styled-components";
import { colors } from "styles/color";
import { BREAKPOINTS } from 'utils/DeviceDetect';


// Styled Components
export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  height: 100%;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
  }

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;