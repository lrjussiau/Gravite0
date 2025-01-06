import { View } from 'react-big-calendar';
import { Event } from '../types';
import { useCalendarNavigation } from './useCalendarNavigation';
import { useFlightManagement } from './useFlightManagement';

interface UseCalendarHandlersProps {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentView: React.Dispatch<React.SetStateAction<View>>;
  currentView: View;  // Ajout de currentView aux props
  userRole?: string;
}

export const useCalendarHandlers = ({
  events,
  setEvents,
  setCurrentDate,
  setCurrentView,
  currentView,  // Ajout de currentView ici
  userRole
}: UseCalendarHandlersProps) => {
  // Utilisation des hooks spécialisés
  const navigation = useCalendarNavigation({
    setCurrentDate,
    setCurrentView,
    currentView    // Passage de currentView au hook de navigation
  });

  const {
    selectedSlot,
    availablePilots,
    isModalOpen,
    editingFlight,
    error,
    formData,
    setIsModalOpen,
    handleFlightUpdate,
    handleFlightCreate,
    handleFlightDelete,
    handleEditFlight,
    handleAddFlight,
    openSlotDetails,
    handleFormChange,
    resetForm,
  } = useFlightManagement({
    userRole,
    events,
    setEvents
  });

  return {
    // État modal
    detailsModalOpen: isModalOpen,
    selectedSlot,
    availablePilots,
    editingFlight,
    error,
    formData,
    
    // Actions modal
    setDetailsModalOpen: setIsModalOpen,
    handleSelectEvent: openSlotDetails,
    handleDeleteFlight: handleFlightDelete,
    handleUpdateFlight: handleFlightUpdate,
    handleCreateFlightInSlot: handleFlightCreate,
    handleEditFlight,
    handleAddFlight,
    handleFormChange,
    resetForm,

    // Navigation
    handleNavigate: navigation.handleNavigate,
    handleViewChange: navigation.handleViewChange
  };
};