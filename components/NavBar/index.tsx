import React, { useState, useEffect } from 'react';
import { navItemKeys, sectionIds } from './NavBarItems';
import { NavContainer, NavList, NavItems, NavItemLink, NavHeader, BurgerButton } from './NavBar.styled';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import useDeviceDetect from 'utils/DeviceDetect';

const NavBar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { t } = useTranslation();
  const { isDesktop } = useDeviceDetect();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isMounted) return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        history.pushState(null, '', `#${sectionId}`);
      }, 1000);
  
      if (!isDesktop) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (!isMounted) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isMounted]);

  useEffect(() => {
    if (isDesktop && isMounted) {
      setIsOpen(true);
    }
  }, [isDesktop, isMounted]);

  // Rendu initial côté serveur
  if (!isMounted) {
    return (
      <NavContainer>
        <NavHeader>
          <BurgerButton onClick={() => {}}>
            <Menu size={16} />
          </BurgerButton>
        </NavHeader>
        <NavList $isOpen={true} $isDesktop={true}>
          {navItemKeys.map((key, index) => (
            <NavItems 
              key={key} 
              $isActive={false}
              $isDesktop={true}
            >
                <NavItemLink 
                  href={`#${sectionIds[index]}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionIds[index]);
                  }}
                >
                {t(key)}
              </NavItemLink>
            </NavItems>
          ))}
        </NavList>
      </NavContainer>
    );
  }

  // Rendu côté client
  return (
    <NavContainer>
      <NavHeader>
        <BurgerButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </BurgerButton>
      </NavHeader>
      <NavList $isOpen={isOpen} $isDesktop={isDesktop}>
        {navItemKeys.map((key, index) => (
          <NavItems 
            key={key} 
            $isActive={activeSection === sectionIds[index]}
            $isDesktop={isDesktop}
          >
            <NavItemLink 
              href={`#${sectionIds[index]}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionIds[index]);
              }}
            >
              {t(key)}
            </NavItemLink>
          </NavItems>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default NavBar;