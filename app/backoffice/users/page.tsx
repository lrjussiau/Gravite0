'use client';

import { PageContainer, ContentContainer } from 'components/shared/Container';
import { Title } from 'components/shared/Typography';
import UserManagement from 'components/backoffice/UserManagement';

export default function UsersPage() {
  return (
    <PageContainer $paddingTop="0">
      <ContentContainer>
        <Title>Gestion des Utilisateurs</Title>
        <UserManagement />
      </ContentContainer>
    </PageContainer>
  );
}