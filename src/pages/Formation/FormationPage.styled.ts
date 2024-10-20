import styled from "styled-components";
import Background from "assets/medias/para_background.jpg";

export const FormationPageBackground = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #F5F5F5;

    &::before {
        content: "";
        position: absolute;
        top: 10%;
        left: 0;
        height: 70%;
        width: 100%;

        opacity: 0.5; /* Légère transparence de l'image */
        z-index: 0;
    }
`;

export const FormationPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    opacity: 1;
    z-index: 1;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #56A9FF;
    margin: 2% 0;
    margin-top: 5%;
`;

export const Text = styled.p`
    font-size: 1rem;
    text-align: justify;
    width: 70%;
    color: #333;
    margin-bottom: 2%;
`;

export const BoxsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    height: 50%;
    gap: 2%;
    margin-top: 2%;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    width: 30%;
    height: 100%;
    background-color: #F5F5F5;
    border-radius: 10px; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border: 2px solid #fff;
    padding: 2%;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    overflow: scroll;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
    }
`; 

export const BoxTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 700;
    color: #56A9FF;
    margin: 0;
    text-align: center;
`;

export const BoxText = styled.p`
    font-size: 1rem;
    color: #333;
    text-align: justify;
`;

export const Link = styled.a`
    font-size: 1rem;
    color: #56A9FF;
    text-decoration: none;
    margin-top: 2%;
    cursor: pointer;
`;


