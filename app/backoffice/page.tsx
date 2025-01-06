'use client';

import { PageContainer, ContentContainer } from 'components/shared/Container';
import { Title } from 'components/shared/Typography';
import MyCalendar from 'components/calendar';

export default function BackofficePage() {
  return (
    <PageContainer $paddingTop="0">
      <ContentContainer $width="100%">
        <Title>Calendrier des vols</Title>
        <MyCalendar />
      </ContentContainer>
    </PageContainer>
  );
}