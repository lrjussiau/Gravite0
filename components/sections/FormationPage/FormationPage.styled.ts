import styled from "styled-components";
import { BREAKPOINTS } from 'utils/DeviceDetect';
import { colors } from 'styles/color';

export const ImageContainer = styled.div`
    position: relative;
    height: 100%;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 20px;
    overflow: hidden;
    left: 0;

    display: flex;
    align-items: center; // Centre verticalement le contenu
    justify-content: center; // Centre horizontalement si nécessaire

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
    }

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        width: 100%;
        height: 100%;
    }


`;

export const BoxText = styled.div`
    position: absolute;
    right: 0;
    height: 70%;
    padding: 2%;
    background-color: ${colors.primaryHover};
    z-index: 1;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    display: flex;
    align-items: center; // Centre verticalement le contenu
    justify-content: center; // Centre horizontalement si nécessaire
`;

export const VerticalText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  letter-spacing: 0px;

    @media (max-width: ${BREAKPOINTS.smallMobile}px) {
        font-size: 0.6rem;
    }

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        font-size: 0.7rem;
    }
`;

export const ColorBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    padding: 2%;
    background-color: ${colors.primaryHover};
    z-index: 2;
`;




