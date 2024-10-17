import styled from "styled-components";

export const WelcomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ButtonContainer = styled.div`
    position: relative;
    bottom: 4%;
    display: flex;
    justify-content: center;
    gap: 70%;
    align-items: center;
    width: 100%;
`;