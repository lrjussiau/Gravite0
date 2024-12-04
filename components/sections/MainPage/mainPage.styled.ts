import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  height: 100dvh;
  width: 100%;
  scroll-snap-type: y mandatory; // Si vous voulez garder le scroll snap
`;

export const Section = styled.section`
  height: 100dvh;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
`;