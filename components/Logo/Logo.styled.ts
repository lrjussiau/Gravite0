import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/DeviceDetect';
// Logo Container
export const LogoContainer = styled.div`
  display: inline;
  position: fixed;
  height: 80px;
  top: 0;
  display: flex;
  background-color: #F5F5F5;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 2200;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    min-width: 250px;
    left: 80px;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    min-width: 150px;
    left: 40px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    height: 70px;
  }
`;

// Logo Image
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;