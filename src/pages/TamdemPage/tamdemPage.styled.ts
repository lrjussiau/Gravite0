import styled from "styled-components";

export const TamdemPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #F5F5F5;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 1;
    align-items: flex-end;
    justify-content: space-around;
    gap: 6%;
    width: 90%;
    height: 80%;
`;

export const LeftPart = styled.div`
    display: flex;
    flex-direction: column;
    width: 57%;
    height: 90%;
    align-items: flex-start;
    margin: 0;
`;

export const RightPart = styled.div`
    display: flex;
    flex-direction: column;
    width: 37%;
    height: 100%;
    align-items: center;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
`;

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 80%;
    border-radius: 20px;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #56A9FF;
    margin: 2% 0;
`;

export const Text = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin: 0;
    text-align: justify;    
`;