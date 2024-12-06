import styled from "styled-components";
import { colors } from "styles/color";
import { BREAKPOINTS } from "utils/DeviceDetect";

export const BoxContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    &:hover {
      .hover-title {
        opacity: 0;
        transform: translateY(20px);
      }
      .hover-container {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    .hover-title {
      display: none;
    }
    .hover-container {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45%;
  padding: 15%;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    display: none;
  }
`;

export const ImageBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  z-index: -1;
`;

export const TopTitleContainer = styled.div`
  position: absolute;
  top: 0;
  width: 75%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${colors.primaryHover};
  border-radius: 0 0 20px 20px;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    opacity: 0;
    transform: translateY(-100%);
    width: 80%;
    &.hover-container {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
`;

export const BottomTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #F5F5F599;
  border-top: 2px solid ${colors.primary};
  border-radius: 0 0 20px 20px;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    opacity: 0;
    transform: translateY(100%);
    &.hover-container {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;

export const HoverTitle = styled.div`
  position: relative;
  top: 35%;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  z-index: 1;
`;

export const ContactButton = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: ${colors.primaryHover};
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 0;
    transition: background-color 0.3s ease;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        background-color: ${colors.primary};
    }

    &:focus {
        outline: none;
    }

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        height: 40px;
        font-size: 1rem;
        margin-top: 5px;
        margin-bottom: 10px;
        width: 70%;
    }
`;