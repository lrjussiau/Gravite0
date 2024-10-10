import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh; /* 100% of the viewport height */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  scroll-snap-align: start; /* Snap behavior */
  padding: 20px;
  box-sizing: border-box;
`;

// Container to hold all sections
export const Container = styled.div`
  scroll-snap-type: y mandatory; /* Enables vertical snap scrolling */
  overflow-y: scroll; /* Allows scrolling on the container */
  height: 100vh; /* Make the container 100% of the viewport height */
`;