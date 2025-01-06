'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Calendar, Users, Clock, CheckSquare, Menu, X } from 'lucide-react';
import {
  SidebarContainer,
  MobileHeader,
  BurgerButton,
  Drawer,
  Overlay,
  DrawerHeader,
  CloseButton,
  NavList,
  NavItem,
  NavText
} from './Sidebar.styled';
import { SubTitle } from 'components/shared/Typography';
import { colors } from 'styles/color';
import useDeviceDetect from 'utils/DeviceDetect';

const navItems = [
  { path: '/backoffice', icon: Calendar, label: 'Calendrier' },
  { path: '/backoffice/users', icon: Users, label: 'Utilisateurs' },
  { path: '/backoffice/availability', icon: Clock, label: 'Disponibilités' },
  { path: '/backoffice/pending', icon: CheckSquare, label: 'Vols en Attente' },
];

interface NavigationContentProps {
  onItemClick?: () => void;
}

const NavigationContent: React.FC<NavigationContentProps> = ({ onItemClick }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    if (onItemClick) onItemClick();
  };

  return (
    <NavList>
      {navItems.map(({ path, icon: Icon, label }) => (
        <NavItem
          key={path}
          $isActive={pathname === path}
          onClick={() => handleNavigation(path)}
        >
          <Icon size={20} />
          <NavText>{label}</NavText>
        </NavItem>
      ))}
    </NavList>
  );
};

export const Sidebar = () => {
  const { isDesktop } = useDeviceDetect();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (!isDesktop) {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isDesktop]);

  if (isDesktop) {
    return (
      <SidebarContainer>
        <div style={{ padding: '1.5rem' }}>
          <SubTitle color={colors.primary} $fontSize="1.5rem">
            Gravité0 Admin
          </SubTitle>
        </div>
        <NavigationContent />
      </SidebarContainer>
    );
  }

  return (
    <>
      <MobileHeader>
        <SubTitle color={colors.primary} $fontSize="1.25rem">
          Gravité0 Admin
        </SubTitle>
        <BurgerButton onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </BurgerButton>
      </MobileHeader>

      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      
      <Drawer $isOpen={isOpen}>
        <DrawerHeader>
          <SubTitle color={colors.primary} $fontSize="1.25rem">
            Gravité0 Admin
          </SubTitle>
          <CloseButton onClick={() => setIsOpen(false)}>
            <X size={24} />
          </CloseButton>
        </DrawerHeader>
        <NavigationContent onItemClick={() => setIsOpen(false)} />
      </Drawer>
    </>
  );
};

export default Sidebar;