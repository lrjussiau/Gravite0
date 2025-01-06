'use client';
import MyCalendar from 'components/calendar';
import { Title } from 'components/shared/Typography';
import { ContentContainer, PageContainer } from 'components/shared/Container';

const CalendarPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>Calendrier des vols</Title>
        <MyCalendar />
      </ContentContainer>
    </PageContainer>

  );
};

export default CalendarPage;