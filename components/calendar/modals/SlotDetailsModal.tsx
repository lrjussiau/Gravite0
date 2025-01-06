import React from "react";
import { format } from "date-fns";
import { Flight, Event, Pilot } from "../types";
import { SubTitle, Text } from "components/shared/Typography";
import {
  ModalBackdrop,
  ModalContent,
  CloseButton,
  FlightList,
  FlightInfo,
  FlightCard,
  StatusBadge,
  FlightActions,
  ActionButton,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
} from "./slotDetailsModal.styled";

interface SlotDetailsModalProps {
  userRole: string | undefined;
  isOpen: boolean;
  selectedSlot: Event | null;
  availablePilots: Pilot[];
  editingFlight: Flight | null;
  error: string | null;
  formData: {
    clientName: string;
    notes: string;
    assignedPilotId: number | null;
  };
  onClose: () => void;
  onFlightUpdate: (slotId: string) => Promise<void>;
  onFlightCreate: (slotId: string) => Promise<void>;
  onFlightDelete: (flightId: number, slotId: string) => Promise<void>;
  onEditFlight: (flight: Flight) => void;
  onAddFlight: () => void;
  onFormChange: (field: string, value: string | number | null) => void;
  onResetForm: () => void;
}

const SlotDetailsModal: React.FC<SlotDetailsModalProps> = ({
  isOpen,
  selectedSlot,
  userRole,
  availablePilots,
  editingFlight,
  error,
  formData,
  onClose,
  onFlightUpdate,
  onFlightCreate,
  onFlightDelete,
  onEditFlight,
  onAddFlight,
  onFormChange,
  onResetForm,
}) => {
  if (!isOpen || !selectedSlot) {
    return null;
  }

  const totalBookedAndPending = selectedSlot.flights.filter(f => 
    f.status === 'PENDING' || f.status === 'BOOKED'
  ).length;
  
  const totalPilots = selectedSlot.pilotsAvailable + selectedSlot.flights.filter(f => 
    f.status === 'BOOKED'
  ).length;
  
  const noAvailableSlots = totalBookedAndPending >= totalPilots;

  const handleSubmit = async () => {
    if (!editingFlight || !selectedSlot) return;

    try {
      if (editingFlight.id === 0) {
        await onFlightCreate(selectedSlot.id);
      } else {
        await onFlightUpdate(selectedSlot.id);
      }
    } catch (error) {
      // Error handling is managed in the hook
      console.error("Error handling flight:", error);
    }
  };

  return (
    <ModalBackdrop>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SubTitle $centered>{format(selectedSlot.start, "eeee dd MMMM")}</SubTitle>
        <Text $centered>
          {format(selectedSlot.start, "HH:mm")} - {format(selectedSlot.end, "HH:mm")}
        </Text>

        <FlightList>
          {selectedSlot.flights.map((flight) => (
            <FlightCard key={flight.id}>
              <FlightInfo>
                <Text>Client: {flight.clientName}</Text>
                <Text>Notes: {flight.notes}</Text>
                <StatusBadge $status={flight.status}>
                  {flight.status}
                </StatusBadge>
                {userRole === "ADMIN" && (
                  <>
                    <Text>Pilote: {flight.assignedPilot || "Non assigné"}</Text>
                    <FlightActions>
                      <ActionButton onClick={() => onEditFlight(flight)}>
                        Editer
                      </ActionButton>
                      {flight.status === "PENDING" && (
                        <ActionButton
                          $variant="primary"
                          onClick={() =>
                            onEditFlight({
                              ...flight,
                              status: "BOOKED",
                            })
                          }
                        >
                          Assigner un pilote
                        </ActionButton>
                      )}
                      <ActionButton
                        $variant="danger"
                        onClick={() => onFlightDelete(flight.id, selectedSlot.id)}
                      >
                        Supprimer
                      </ActionButton>
                    </FlightActions>
                  </>
                )}
              </FlightInfo>
            </FlightCard>
          ))}
        </FlightList>

        {editingFlight && (
          <Form>
            <FormGroup>
              <Label>Nom du Client:</Label>
              <Input
                type="text"
                value={formData.clientName}
                onChange={(e) => onFormChange("clientName", e.target.value)}
                readOnly={editingFlight.id !== 0 && userRole !== "ADMIN"}
              />
            </FormGroup>

            {userRole === "ADMIN" && (
              <FormGroup>
                <Label>Pilote:</Label>
                <Select
                  value={formData.assignedPilotId || ""}
                  onChange={(e) => {
                    const newPilotId = e.target.value ? Number(e.target.value) : null;
                    onFormChange("assignedPilotId", newPilotId);
                  }}
                >
                  <option value="">Sélectionner un pilote</option>
                  {availablePilots.map((pilot) => (
                    <option key={pilot.id} value={pilot.id}>
                      {pilot.user.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            )}

            <FormGroup>
              <Label>Notes:</Label>
              <TextArea
                value={formData.notes}
                onChange={(e) => onFormChange("notes", e.target.value)}
                readOnly={userRole !== "ADMIN" && editingFlight.id !== 0}
              />
            </FormGroup>

            {error && <Text $centered style={{ color: "red" }}>{error}</Text>}
            
            <FlightActions>
              <ActionButton $variant="primary" onClick={handleSubmit}>
                Sauvegarder
              </ActionButton>
              <ActionButton onClick={onResetForm}>Annuler</ActionButton>
            </FlightActions>
          </Form>
        )}

        {(userRole === "ADMIN" || userRole === "COMPANY") && !editingFlight && (
          <ActionButton 
            $variant="primary" 
            onClick={onAddFlight}
            disabled={noAvailableSlots}
            style={{
              opacity: noAvailableSlots ? 0.5 : 1,
              cursor: noAvailableSlots ? 'not-allowed' : 'pointer',
            }}
          >
            {noAvailableSlots ? 
              "Aucun créneau disponible" : 
              "Ajouter un vol"
            }
          </ActionButton>
        )}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default SlotDetailsModal;