import styled from 'styled-components';

// NavBar Container
export const NavContainer = styled.div<{ isVisible: boolean }>`
  background-color: #F5F5F5;
  color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  z-index: 10;
`;

// NavBar List Container
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  height: 100%;
  align-items: center;
  margin: 0px;
  padding: 0px;
  width: 45%;
`;

// NavBar List Items
export const NavItems = styled.li<{ isActive: boolean }>`
  margin: 0 5%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  color: ${({ isActive }) => (isActive ? '#56A9FF' : 'inherit')};

  &:hover {
    color: #56A9FF;
    border-bottom: 2px solid #56A9FF;
  }
`;

export const NavItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
`;

