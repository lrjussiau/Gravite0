import { useState, useEffect } from 'react';

export const useScrollLock = (delay: number = 1000) => {
  const [canScroll, setCanScroll] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!canScroll) {
        e.preventDefault();
        return;
      }
      setCanScroll(false);
      const direction = e.deltaY > 0 ? 'down' : 'up';
      setTimeout(() => setCanScroll(true), delay);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => window.removeEventListener('wheel', handleScroll);
  }, [canScroll, delay]);

  return { canScroll, setCurrentSection, currentSection };
};
