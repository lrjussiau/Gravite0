import React from 'react';
import { ScrollDownButtonContainer, TriangleDown } from './ScrollDownButton.styled';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
    console.log(currentScrollPosition);
    console.log(sectionsRef.current);
    console.log(nextSection);
  

    if (nextSection === -1 || nextSection >= totalSections) {
      nextSection = 0;
    }

    sectionsRef.current[nextSection + 1]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <ScrollDownButtonContainer onClick={handleClick}>
      <TriangleDown>
        <Image 
          src="/images/triangle.png"
          alt='Scroll Down' 
          fill
          style={{ objectFit: 'cover' }}
        />
      </TriangleDown>
    </ScrollDownButtonContainer>
  );
};

export default ScrollDownButton;