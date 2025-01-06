import styled from 'styled-components';
import { ContentContainer } from 'components/shared/Container';
import { BREAKPOINTS } from 'utils/DeviceDetect';

export const BackofficeContainer = styled(ContentContainer)`
  display: flex;
  min-height: 100vh;
  padding: 0;
`;

export const MainContent = styled.main`
  width: 75%;
  flex: 1;
  padding: 2rem;
  margin-left: 250px;
  background-color: ${({ theme }) => theme.colors.background || '#f5f5f5'};

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        padding: 1rem;
        width: 100%;
        margin-left: 0;
    }
`;
