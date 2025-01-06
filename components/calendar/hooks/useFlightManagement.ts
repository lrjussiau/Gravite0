import { useState } from 'react';
import { Event, Flight, Pilot } from '../types';
import { flightServices } from '../service';

interface UseFlightManagementProps {
  userRole: string | undefined;
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

interface FormData {
  clientName: string;
  notes: string;
  assignedPilotId: number | null;
}

export const useFlightManagement = ({ userRole, events, setEvents }: UseFlightManagementProps) => {
  const [selectedSlot, setSelectedSlot] = useState<Event | null>(null);
  const [availablePilots, setAvailablePilots] = useState<Pilot[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFlight, setEditingFlight] = useState<Flight | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    clientName: "",
    notes: "",
    assignedPilotId: null,
  });

  const resetForm = () => {
    setFormData({
      clientName: "",
      notes: "",
      assignedPilotId: null,
    });
    setEditingFlight(null);
    setError(null);
  };

  const refreshSlotData = async (slotId: string) => {
    if (!userRole) return;
  
    const slot = events.find(event => event.id === slotId);
    if (!slot) return;
  
    const updatedFlights = await flightServices.fetchFlights(userRole);
    const slotFlights = updatedFlights.filter(flight => 
      flight.start.getTime() >= slot.start.getTime() &&
      flight.end.getTime() <= slot.end.getTime()
    );
  
    if (userRole !== 'PILOT') {
      const slotInfo = {
        id: slot.id,
        start: slot.start,
        end: slot.end
      };
      
      const pilotsData = await flightServices.fetchPilotsAvailablePerSlot([slotInfo]);
      const slotData = pilotsData[0]; // On prend le premier car on n'a envoyé qu'un slot
      
      setEvents(prevEvents => prevEvents.map(event => 
        event.id === slotId
          ? { 
              ...event, 
              flights: slotFlights, 
              pilotsAvailable: slotData.pilotsAvailable 
            }
          : event
      ));
  
      if (selectedSlot?.id === slotId) {
        setAvailablePilots(slotData.availablePilots);
        setSelectedSlot(prev => prev ? { 
          ...prev, 
          flights: slotFlights,
          pilotsAvailable: slotData.pilotsAvailable 
        } : null);
      }
    }
  };

  const handleFlightUpdate = async (slotId: string) => {
    if (!editingFlight || !selectedSlot) return;

    try {
      const selectedPilot = availablePilots.find(p => p.id === formData.assignedPilotId);
      const updatedFlight: Flight = {
        ...editingFlight,
        clientName: formData.clientName,
        notes: formData.notes,
        assignedPilotId: formData.assignedPilotId,
        assignedPilot: selectedPilot?.user.name || null,
        status: formData.assignedPilotId ? "BOOKED" : "PENDING",
      };

      await flightServices.updateFlight(updatedFlight);
      await refreshSlotData(slotId);
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      setError("Erreur lors de la sauvegarde du vol : " + error);
      console.error('Error updating flight:', error);
      throw error;
    }
  };

  const handleFlightCreate = async (slotId: string) => {
    if (!editingFlight || !selectedSlot) return;

    try {
      // Validation côté client
      if (!formData.clientName?.trim()) {
        setError("Le nom du client est requis.");
        return;
      }

      const selectedPilot = availablePilots.find(p => p.id === formData.assignedPilotId);
      const newFlight: Flight = {
        ...editingFlight,
        clientName: formData.clientName,
        notes: formData.notes,
        assignedPilotId: formData.assignedPilotId,
        assignedPilot: selectedPilot?.user.name || null,
        status: formData.assignedPilotId ? "BOOKED" : "PENDING",
      };

      await flightServices.createFlight(selectedSlot, newFlight);
      await refreshSlotData(slotId);
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating flight:', error);
      setError("Une erreur est survenue lors de la création du vol");
      throw error;
    }
  };

  const handleFlightDelete = async (flightId: number, slotId: string) => {
    try {
      await flightServices.deleteFlight(flightId);
      await refreshSlotData(slotId);
      if (selectedSlot?.flights.length === 1) {
        setIsModalOpen(false);
      }
    } catch (error) {
      setError("Erreur lors de la suppression du vol : " + error);
      console.error('Error deleting flight:', error);
      throw error;
    }
  };

  const handleEditFlight = (flight: Flight) => {
    if (userRole !== "ADMIN") return;
    
    setEditingFlight(flight);
    setFormData({
      clientName: flight.clientName || "",
      notes: flight.notes || "",
      assignedPilotId: flight.assignedPilotId || null,
    });
  };

  const handleAddFlight = () => {
    if (!selectedSlot) return;

    setFormData({
      clientName: "",
      notes: "",
      assignedPilotId: null,
    });

    setEditingFlight({
      id: 0,
      userId: 0,
      clientName: "",
      notes: "",
      assignedPilot: null,
      assignedPilotId: null,
      start: selectedSlot.start,
      end: selectedSlot.end,
      status: "PENDING",
    });
  };

  const openSlotDetails = async (event: Event) => {
    try {
      const pilotsData = await flightServices.fetchPilotsAvailablePerSlot([{
        id: event.id,
        start: event.start,
        end: event.end
      }]);
      
      const slotData = pilotsData[0];
      setAvailablePilots(slotData.availablePilots);
      setSelectedSlot({
        ...event,
        pilotsAvailable: slotData.pilotsAvailable
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error opening slot details:', error);
      setError("Erreur lors de l'ouverture des détails du créneau : " + error);
    }
  };

  const handleFormChange = (field: string, value: string | number | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return {
    // States
    selectedSlot,
    availablePilots,
    isModalOpen,
    editingFlight,
    error,
    formData,
    
    // Actions
    setIsModalOpen,
    handleFlightUpdate,
    handleFlightCreate,
    handleFlightDelete,
    handleEditFlight,
    handleAddFlight,
    openSlotDetails,
    handleFormChange,
    resetForm,
  };
};