import styled from "styled-components";

export const WhoWeAreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #F5F5F5;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #56A9FF;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3%;
    width: 70%;
    margin-bottom: 2%;
    color: #333;
`;

export const FaceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5%;
    width: 100%;
    margin-top: 1%;
`;

export const MemberTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2%;
`;

export const ImageFace = styled.img`
    width: 8vw;
    aspect-ratio: 1/1;
    object-fit: cover;
    border: 2px solid #56A9FF;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const NameText = styled.h2`
    font-size: 1.4rem;
    color: #56A9FF;
    font-weight: 500;
    margin: 0;
`;

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
    gap: 2%;
    width: 100%;
    padding: 0;
`;

export const ListItem = styled.li`
    font-size: 1rem;
    color: #333;
`;

export const Line = styled.hr`
    width: 100%;
    border: 1px solid #333;
    margin: 0.5% 0;
    opacity: 0.1;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;
