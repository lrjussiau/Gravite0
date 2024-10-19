import exp from "constants";
import styled from "styled-components";

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    border-radius: 20px;
    background-color: #F5F5F5;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    padding: 2%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
    height: 7%;
    border-radius: 20px;
    overflow: hidden;
    background-color: #333;
    gap: 0.3%;
`;

export const Button = styled.button<{active: boolean}>`
    width: 50%;
    height: 100%;
    border: none;
    background-color: ${props => props.active ? "#56A9FF" : "#fff"};
    color: ${props => props.active ? "#fff" : "#333"};
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${props => props.active ? "#4C8FFB" : "#E0E0E0"};
    }
    &:focus {
        outline: none;
    }
`;

export const PhotoBox = styled.img`
    width: 70%;
    height: 40%;
    object-fit: cover;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 1s ease-in; /* Transition for fade-in effect */

    &.visible {
        opacity: 1; /* Fade-in when the class 'visible' is added */
    }
`;

export const TextPrice = styled.p`
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    color: #333;
    width: 70%;
    self-align: center;
    margin: 0;
    opacity: 0;
    transition: opacity 1s ease-in; /* Transition for fade-in effect */

    &.visible {
        opacity: 1; /* Fade-in when the class 'visible' is added */
    }
`;


export const TextPhoto = styled.p`
    font-size: 1.2rem;
    color: #333;
    opacity: 0.6;
    width: 70%;
    margin: 0;
`;

export const ContactButton = styled.button`
    width: 40%;
    height: 8%;
    border: none;
    background-color: #56A9FF;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    &:hover {
        background-color: #4C8FFB;
    }
    &:focus {
        outline: none;
    }
`;