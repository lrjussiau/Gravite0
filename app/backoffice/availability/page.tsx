'use client';

import { PageContainer } from 'components/shared/Container';
import { Title } from 'components/shared/Typography';
import PilotAvailability from 'components/backoffice/PilotAvailability';

export default function AvailabilityPage() {
  return (
    <PageContainer $paddingTop="0">
        <Title>Gestion des Disponibilités</Title>
        <PilotAvailability />
    </PageContainer>
  );
}