import { View } from 'react-big-calendar';
import { startOfWeek } from 'date-fns';

interface UseCalendarNavigationProps {
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentView: React.Dispatch<React.SetStateAction<View>>;
  currentView: View;
}

export const useCalendarNavigation = ({
  setCurrentDate,
  setCurrentView,
  currentView
}: UseCalendarNavigationProps) => {
  const handleNavigate = (newDate: Date) => {
    if (currentView === 'week') {
      const weekStart = startOfWeek(newDate, { weekStartsOn: 1 });
      setCurrentDate(weekStart);
    } else {
      setCurrentDate(newDate);
    }
  };

  const handleViewChange = (newView: View) => {
    setCurrentView(newView);
  };

  return {
    handleNavigate,
    handleViewChange
  };
};