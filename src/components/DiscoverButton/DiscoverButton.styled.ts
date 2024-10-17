import styled from "styled-components";

export const DiscoverButtonContainer = styled.div`
    position: absolute; 
    left: 0; 
    right: 0; 
    margin-inline: auto; 
    width: fit-content;
    bottom: 250%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border: 2px solid #fff;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform:   scale(1.1);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
    }
`;


export const TextDiscover = styled.p`
    color: #fff;
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
`;

