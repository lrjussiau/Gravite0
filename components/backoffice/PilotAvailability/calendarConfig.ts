// calendarConfig.ts
import { momentLocalizer, Messages } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';

// Configuration de moment.js en français
moment.locale('fr', {
  week: {
    dow: 1, // Lundi comme premier jour de la semaine
    doy: 4  // Première semaine de l'année contenant un jeudi
  }
});

// Création du localisateur
export const localizer = momentLocalizer(moment);

// Messages personnalisés en français
export const messages: Messages = {
  week: 'Semaine',
  previous: 'Précédent',
  next: 'Suivant',
  today: "Aujourd'hui",
  month: 'Mois',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'Heure',
  event: 'Événement',
  allDay: 'Toute la journée',
  noEventsInRange: 'Aucun événement dans cette période',
  showMore: (total: number) => `+ ${total} autres`,
};

// Configuration du calendrier
export const calendarConfig = {
  views: {
    week: true, // Uniquement la vue semaine
  },
  
  timeSlotConfig: {
    min: new Date(new Date().setHours(8, 0, 0)),
    max: new Date(new Date().setHours(19, 0, 0)),
  },
  
  // Styles des événements
  eventStyles: {
    unavailable: {
      style: {
        backgroundColor: '#FF5656',
        borderRadius: '3px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
      }
    },
    flight: {
      style: {
        backgroundColor: '#56A9FF',
        borderRadius: '3px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
      }
    }
  }
};

