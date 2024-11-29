import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  smallMobile: 375,  // Petit mobile jusqu'à 375px
  mobile: 767,      // Mobile standard jusqu'à 767px
  tablet: 1023,     // Tablette jusqu'à 1023px
};

const useDeviceDetect = () => {
  const [state, setState] = useState({
    isSmallMobile: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setState({
        isSmallMobile: width <= BREAKPOINTS.smallMobile,
        isMobile: width > BREAKPOINTS.smallMobile && width <= BREAKPOINTS.mobile,
        isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
        isDesktop: width > BREAKPOINTS.tablet,
      });
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return state;
};

export default useDeviceDetect;