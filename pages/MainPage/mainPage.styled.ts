import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory; // Si vous voulez garder le scroll snap

  @media (max-height: 600px) {
    scroll-snap-type: none;
  }
`;

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  position: relative;

  @media (max-height: 600px) {
    min-height: auto;
    height: auto;
  }
`;