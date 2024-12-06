import styled from 'styled-components';
import { colors } from 'styles/color';
import { BREAKPOINTS } from 'utils/DeviceDetect';

export const MapWrapper = styled.div`
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    position: relative;
`;

export const GradientLeft = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background: linear-gradient(to right, ${colors.background} 0%, transparent 100%);
    z-index: 1000;
    pointer-events: none;
`;

export const GradientRight = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    background: linear-gradient(to left, ${colors.background} 0%, transparent 100%);
    z-index: 1000;
    pointer-events: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const GradientTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: linear-gradient(to bottom, ${colors.background} 0%, transparent 100%);
    z-index: 1000;
    pointer-events: none;
`;

export const GradientBottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: linear-gradient(to top, ${colors.background} 0%, transparent 100%);
    z-index: 1000;
    pointer-events: none;
`;