import { format, parse, getWeek } from 'date-fns';
import { dateFnsLocalizer, View, DateRange } from 'react-big-calendar';
import { fr } from 'date-fns/locale/fr';

// Configuration des locales
const locales = {
  'fr': fr
};

export const formats = {
  agendaHeaderFormat: ({ start }: DateRange) => 
    format(start, "eeee dd LLL", { locale: fr }).toLowerCase(),
  agendaDateFormat: () => '',
  dayRangeHeaderFormat: ({ start, end }: DateRange) => {
    const weekNumber = getWeek(start, { 
      locale: fr,
      weekStartsOn: 1,
      firstWeekContainsDate: 4 
    });
    return `${format(start, "MMMM dd", { locale: fr })} – ${format(end, "dd", { locale: fr })} - S.${weekNumber}`;
  }
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => 1, // Lundi
  getDay: (dayNumber: number) => dayNumber, // Ne pas transformer le jour
  locales
});

// Messages traduits
export const messages = {
  allDay: 'Journée',
  previous: 'Précédent',
  next: 'Suivant',
  today: "Aujourd'hui",
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'Heure',
  event: 'Événement',
  work_week: 'Semaine de travail',
  showMore: () => 'Voir plus',
  noEventsInRange: 'Aucun événement dans cette période',
  tomorrow: 'Demain',
  yesterday: 'Hier',
  next7Days: '7 prochains jours',
  prev7Days: '7 jours précédents',
};

// Vues disponibles
export const allViews: View[] = ['month', 'week', 'day', 'agenda'];

// Configuration des créneaux horaires
export const timeSlotConfig = {
  startHour: 9,
  startMinute: 30,
  endHour: 17,
  endMinute: 0,
  slotDurationMinutes: 90 // 1h30
};

// Helper pour les créneaux horaires
export const getTimeSlotConfig = () => ({
  slotDuration: timeSlotConfig.slotDurationMinutes * 60 * 1000,
  getDayStartTime: (date: Date) => {
    const dayStartTime = new Date(date);
    dayStartTime.setHours(timeSlotConfig.startHour, timeSlotConfig.startMinute, 0, 0);
    return dayStartTime;
  },
  getDayEndTime: (date: Date) => {
    const dayEndTime = new Date(date);
    dayEndTime.setHours(timeSlotConfig.endHour, timeSlotConfig.endMinute, 0, 0);
    return dayEndTime;
  }
});