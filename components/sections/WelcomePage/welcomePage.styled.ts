// welcomePage.styled.ts
import styled from "styled-components";
import { BREAKPOINTS } from "utils/DeviceDetect";

export const VideoBackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    opacity: 0.8;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 5%;
    display: flex;
    justify-content: center;
    gap: 70%;
    align-items: center;
    width: 100%;
    z-index: 1;

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        gap: 50%;
    }

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        gap: 30%;
    }

    @media (max-width: ${BREAKPOINTS.smallMobile}px) {
        gap: 20%;
    }
`;