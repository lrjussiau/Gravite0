import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f3f4f6;
`;

export const Sidebar = styled.div`
  width: 16rem;
  background-color: white;
  box-shadow: 4px 0 6px -1px rgba(0, 0, 0, 0.1);
`;

export const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const SidebarTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
`;

export const Navigation = styled.nav`
  margin-top: 1rem;
`;

interface NavItemContainerProps {
  $isActive?: boolean;
}

export const NavItemContainer = styled.div<NavItemContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${props => props.$isActive ? '#2563eb' : '#4b5563'};
  background-color: ${props => props.$isActive ? '#eff6ff' : 'transparent'};

  &:hover {
    background-color: ${props => props.$isActive ? '#eff6ff' : '#f9fafb'};
  }
`;

export const NavItemIcon = styled.span`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`;

export const NavItemLabel = styled.span`
  font-weight: 500;
`;

export const MainContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: 2rem;
`;