// NavBar.styled.ts
import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/DeviceDetect';
import { colors } from 'styles/color';

// Base layout
export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000;
  box-sizing: border-box;
  
  /* Visual styles */
  background-color: #F5F5F5;
  color: #333;
  border: 1px solid ${colors.primary};
  border-top: none;
  
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    padding: 0;
    height: auto;
    flex-direction: column;
  }
`;

// Burger menu header
export const NavHeader = styled.div`
  display: none;
  
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
  }
`;

export const BurgerButton = styled.button`
  /* Reset button styles */
  background: none;
  border: none;
  padding: 0.5rem;
  
  /* Visual styles */
  color: #333;
  cursor: pointer;
  display: none;
  
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: block;
  }
`;

export const NavList = styled.ul<{ $isOpen: boolean; $isDesktop: boolean }>`
  /* Reset list styles */
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  /* Layout */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 60%;
  
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    /* Responsive layout */
    display: ${({ $isOpen, $isDesktop }) => 
      $isDesktop ? 'flex' : ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    
    /* Spacing */
    padding: ${({ $isDesktop }) => ($isDesktop ? '0' : '3rem 0 1rem')};
    padding-top: 30px;
    background-color: #F5F5F5;
  }
`;

export const NavItems = styled.li<{ $isActive: boolean; $isDesktop: boolean }>`
  /* Base layout */
  display: flex;
  align-items: center;
  height: 40px;
  
  /* Visual styles */
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  color: ${({ $isActive }) => ($isActive ? colors.primary : 'inherit')};

  &:hover {
    color: ${colors.primary};
    border-bottom: 2px solid ${colors.primary};
  }
  
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    /* Responsive layout */
    margin: ${({ $isDesktop }) => ($isDesktop ? '0 2%' : '0.5rem 0')};
    width: ${({ $isDesktop }) => ($isDesktop ? 'auto' : '100%')};
    justify-content: ${({ $isDesktop }) => ($isDesktop ? 'flex-start' : 'center')};
    height: ${({ $isDesktop }) => ($isDesktop ? '40px' : '50px')};
    padding: ${({ $isDesktop }) => ($isDesktop ? '0' : '0.5rem 0')};
    
    /* Hover states */
    &:hover {
      border-bottom: ${({ $isDesktop }) => ($isDesktop ? `2px solid ${colors.primary}` : 'none')};
      background-color: ${({ $isDesktop }) => ($isDesktop ? 'transparent' : 'rgba(86, 169, 255, 0.1)')};
    }
  }
`;

export const NavItemLink = styled.a`
  /* Reset link styles */
  text-decoration: none;
  color: inherit;
  
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;