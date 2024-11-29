import styled from "styled-components";
import { colors } from "styles/color";
import { BREAKPOINTS } from 'utils/DeviceDetect';

export const Footer = styled.footer`
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    background-color: #09090909;
    border-top: 1px solid ${colors.primary};
`;

export const ItemPlacer = styled.div`
    position: absolute;
    z-index: 1000;
    left: 0;
    bottom: 0;
    width: 90%;

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        bottom: 5%;
    }
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #09090985;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    padding: 3%;
    width: fit-content;
    margin: 3%;
    border-radius: 10px;
    gap: 10px;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    height: 100%;
    border-left: 1px solid ${colors.primary};

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        width: 100%;
        height: 40%;
        border-left: none;
        border-top: 1px solid ${colors.primary};
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 50%;
    background-color: ${colors.background};
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border: 4px solid ${colors.primary};

    &:hover {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
        scale: 1.1;
    }
`;