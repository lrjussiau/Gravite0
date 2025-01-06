import React from 'react';
import { MainContent } from './Layout.styled';
import { Sidebar } from '../Sidebar';
import { ContentContainer} from 'components/shared/Container';

interface BackofficeLayoutProps {
  children: React.ReactNode;
}

export const BackofficeLayout: React.FC<BackofficeLayoutProps> = ({ children }) => {
  return (
    <ContentContainer $width="100%">
      <Sidebar />
      <MainContent>{children}</MainContent>
    </ContentContainer>
  );
};