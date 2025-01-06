import { isSameDay } from 'date-fns';
import { Event } from '../types';
import { Text } from 'components/shared/Typography';
import { colors } from 'styles/color';
import { MonthCell, DateContent } from './monthView.styled';
import { View } from 'react-big-calendar';
import useDeviceDetect from 'utils/DeviceDetect';

interface MonthViewProps {
  date: Date;
  currentDate: Date;
  events: Event[];
  onNavigate: (date: Date) => void;
  onViewChange: (view: View) => void;
  userRole?: string;
  userId?: number;
}

export const MonthView = ({
  date,
  currentDate,
  events,
  userRole,
  userId,
  onNavigate,
  onViewChange
}: MonthViewProps) => {
  const isCurrentMonth = date.getMonth() === currentDate.getMonth();
  const isToday = isSameDay(date, new Date());
  const { isDesktop } = useDeviceDetect();


  if (!isCurrentMonth) {
    return (
      <MonthCell>
        <DateContent>{date.getDate()}</DateContent>
      </MonthCell>
    );
  }

  const calculateDayFlights = (dayEvents: Event[]) => {
    if (userRole === 'PILOT' && userId) {
      return {
        totalAvailableFlights: 0,
        bookedFlights: dayEvents.length // Puisque les events sont déjà filtrés pour le pilote
      };
    }

    let totalAvailableFlights = 0;
    let bookedFlights = 0;

    dayEvents.forEach(event => {
      const slotsAvailable = event.pilotsAvailable || 0;
      const bookedInSlot = event.flights.filter(flight => flight.status === 'BOOKED').length;
      const pendingInSlot = event.flights.filter(flight => flight.status === 'PENDING').length;

      totalAvailableFlights += slotsAvailable + bookedInSlot;
      bookedFlights += bookedInSlot + pendingInSlot;
    });

    return {
      totalAvailableFlights,
      bookedFlights
    };
  };

  const handleClick = () => {
    onNavigate(date);
    onViewChange('day');
  };

  const dayEvents = events.filter(event => isSameDay(event.start, date));
  const { totalAvailableFlights, bookedFlights } = calculateDayFlights(dayEvents);

  const bookingRatio = totalAvailableFlights > 0 ? bookedFlights / totalAvailableFlights : 0;
  let backgroundClass = '';

  if (bookingRatio === 0) {
    backgroundClass = 'no-bookings';
  } else if (bookingRatio < 0.5) {
    backgroundClass = 'low-bookings';
  } else if (bookingRatio < 1) {
    backgroundClass = 'medium-bookings';
  } else {
    backgroundClass = 'fully-booked';
  }

  return (
    <MonthCell
      onClick={handleClick}
      className={`current-month ${isToday ? 'today' : ''} ${backgroundClass}`}
    >
      <DateContent>{date.getDate()}</DateContent>
      {isDesktop && (
        <Text $centered color={colors.text.light} $fontSize="0.9rem">
          Vols réservés
        </Text>
      )}
      <Text $centered $fontWeight='bold'>
        {userRole === 'PILOT' ? bookedFlights : `${bookedFlights}/${totalAvailableFlights}`}
      </Text>
    </MonthCell>
  );
};