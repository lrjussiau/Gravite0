import styled from 'styled-components';
import { colors } from 'styles/color';

export const SidebarContainer = styled.nav`
  position: absolute;
  height: 100vh;
  width: 20%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid #e5e5e5;
`;

export const MobileHeader = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
  }
`;

interface DrawerProps {
  $isOpen: boolean;
}

export const Drawer = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 280px;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

export const Overlay = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;

export const DrawerHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  width: 100%;
`;

interface NavItemProps {
  $isActive?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? colors.primary : 'inherit')};
  background-color: ${({ $isActive }) => 
    $isActive ? 'rgba(0, 0, 0, 0.03)' : 'transparent'};

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const NavText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;