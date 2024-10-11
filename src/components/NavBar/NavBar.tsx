import React, { useState, useEffect } from 'react';
import { getTranslatedNavItems, navItems } from './NavBarItems'; 
import { NavContainer, NavList, NavItems, NavItemLink } from './NavBar.styled';
import { useTranslation } from 'react-i18next';

type NavBarProps = {
  items?: string[];
};

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const NavBar: React.FC<NavBarProps> = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { i18n } = useTranslation();

  const [translatedNavItems, setTranslatedNavItems] = useState(navItems);

  useEffect(() => {
    setTranslatedNavItems(getTranslatedNavItems());
  }, [i18n.language]);

  useEffect(() => {
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
  }, []);

  return (
    <NavContainer isVisible={isVisible}>
      <NavList>
        {translatedNavItems.map((item, index) => (
          <NavItems key={index} isActive={activeSection === item.toLowerCase()}>
            <NavItemLink onClick={() => scrollToSection(item.toLowerCase())}>
              {item}
            </NavItemLink>
          </NavItems>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
