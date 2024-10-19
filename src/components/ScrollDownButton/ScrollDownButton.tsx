import React from 'react';
import { ScrollDownButtonContainer, TriangleDown } from './ScrollDownButton.styled';
import Triangle from 'assets/medias/triangle.png';
import { useEffect, useRef } from 'react';

const ScrollDownButton: React.FC = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('section'));
  }, []);

  const handleClick = () => {
    const totalSections = sectionsRef.current.length;
    const currentScrollPosition = window.scrollY;
    let nextSection = sectionsRef.current.findIndex(
      (section) => section.offsetTop > currentScrollPosition
    );

    if (nextSection === -1 || nextSection >= totalSections) {
      nextSection = 0; // If no further sections, go back to the first one
    }

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