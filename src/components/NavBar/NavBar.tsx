import React, { useState, useEffect } from 'react';
import { navItems } from './NavBarItems';
import { NavContainer, NavList, NavItems, NavItemLink } from './NavBar.styled';

type NavBarProps = {
  items?: string[];
};

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const NavBar: React.FC<NavBarProps> = ({ items = navItems }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
        {items.map((item, index) => (
          <NavItems
            key={index}
            isActive={activeSection === item.toLowerCase()}
          >
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
