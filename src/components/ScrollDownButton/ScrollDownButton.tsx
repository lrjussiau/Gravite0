import React, { useEffect, useRef } from 'react';
import { ScrollDownButtonContainer, TriangleDown } from './ScrollDownButton.styled';
import Triangle from 'assets/medias/triangle.png';
import { useScrollLock } from '../../utils/useScroll';

const ScrollDownButton: React.FC = () => {
  const { currentSection, setCurrentSection } = useScrollLock(1000);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Populate the sectionsRef with all sections
    sectionsRef.current = Array.from(document.querySelectorAll('section'));
  }, []);

  const handleClick = () => {
    const totalSections = sectionsRef.current.length;
    const nextSection = (currentSection + 1) % totalSections;

    setCurrentSection(nextSection);
    
    sectionsRef.current[nextSection]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <ScrollDownButtonContainer onClick={handleClick}>
      <TriangleDown src={Triangle} alt='Scroll Down' />
    </ScrollDownButtonContainer>
  );
};

export default ScrollDownButton;