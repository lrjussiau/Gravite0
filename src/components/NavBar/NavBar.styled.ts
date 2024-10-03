import styled from 'styled-components';

export const NavContainer = styled.div`
    background-color: #F5F5F5;
    color: #333;
    font-size: 1em;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    position: fixed;
    height: 40px; /* Set a fixed height */
    padding: 0 1rem; /* Horizontal padding only */
    box-sizing: border-box; /* Include padding in height */
    width: 100%;
    top: 0;
    z-index: 1000;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: right;
    list-style-type: none;
    height: 100%;
    align-items: center;
    margin-right: 5%;
`;

export const NavItems = styled.li`
  padding: 1% 0;
  margin: 0 2%;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  
  &:hover {
    color: #1376C7;
    border-bottom: 2px solid #1376C7;
  }
`;