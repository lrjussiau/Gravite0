import styled from "styled-components";

export const ImageFaceContainer = styled.div`
    position: relative;
    width: 8vw;
    aspect-ratio: 1/1;
    object-fit: cover;
    border: 2px solid #56A9FF;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
`;

export const Line = styled.hr`
    width: 100%;
    border: 1px solid #333;
    opacity: 0.1;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;
