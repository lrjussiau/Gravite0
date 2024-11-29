import styled from "styled-components";
import { BREAKPOINTS } from 'utils/DeviceDetect';

export const ScrollDownButtonContainer = styled.div`
    position: absolute; 
    left: 0; 
    right: 0; 
    margin-inline: auto; 
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border: 2px solid #fff;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        display: none;
    }
`;

export const TriangleDown = styled.div`
    width: 25px;
    height: 25px;
    transform: rotate(180deg);
    transition: transform 0.3s ease;
    filter: invert(100%);
`;
