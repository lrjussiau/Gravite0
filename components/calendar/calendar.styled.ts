import styled from 'styled-components';
import { colors } from 'styles/color';

export const CalendarWrapper = styled.div`
  height: 500px;
  width: 100%;

  .rbc-calendar {
    height: 100%;
  }

  .rbc-agenda-date-cell {
    display: none;
  }

  /* Masquer uniquement les événements par défaut */
  .rbc-events-container {
    
    margin: 0;

    .rbc-event {
      .rbc-event-label {
        display: none;
      }
      background: none;
      border: none;
      padding: 0;
      
      &:focus {
        outline: none;
      }
    }
  }

  .rbc-row-content {
    display: none;
  }

  .rbc-allday-cell {
    display: none;
  }

  /* Style pour la vue semaine */
  .rbc-time-view {
    /* Styles pour l'en-tête de la timeline */
    .rbc-time-header {

      .rbc-time-header-gutter {
        border-bottom: 1px solid #ddd;
      }

       .rbc-time-header-content {
        .rbc-header {
          padding: 10px;
          font-weight: bold;
          text-align: center;   
        }
      }
    }

    /* Styles pour la colonne des heures */
    .rbc-time-column {
      .rbc-timeslot-group {
        min-height: 40px;
      }

      .rbc-label {
        padding: 5px;
        font-size: 0.9rem;
        color: ${colors.text.light};
      }
    }
    
    /* Styles pour le contenu principal */
    .rbc-time-content {
      border-top: none;

      .rbc-time-column {
        /* Préserver l'affichage des heures */
        &.rbc-time-column {
          display: table-cell;
        }
      }

      .rbc-time-gutter {
        /* Style spécifique pour la colonne des heures */
        .rbc-timeslot-group {
          display: flex;
          justify-content: flex-end;
          align-items: end;
          min-height: 40px;
        }
      }

      /* Style pour les slots de temps */
      .rbc-day-slot {
        .rbc-timeslot-group {
          .rbc-time-slot {
            border-top: none;
          }
        }
      }
    }
  }

  /* Style pour les cellules du mois */
  .rbc-month-view {
    .rbc-month-row {
      .rbc-row-bg {
        .rbc-day-bg {
          &.rbc-off-range-bg {
            background-color: #f9f9f9;
          }
        }
      }
    }
  }
`;

