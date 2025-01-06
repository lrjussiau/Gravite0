'use client';

import { PageContainer } from 'components/shared/Container';
import { Title } from 'components/shared/Typography';
import PendingFlights from 'components/backoffice/PendingFlights';

export default function PendingFlightsPage() {
  return (
    <PageContainer $paddingTop="0">
        <Title>Vols en Attente</Title>
        <PendingFlights />
    </PageContainer>
  );
}