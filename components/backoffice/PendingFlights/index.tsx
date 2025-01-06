'use client';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { CheckCircle, XCircle } from 'lucide-react';
import {
  FlightCard,
  FlightInfo,
  InfoItem,
  Label,
  Value,
  Actions,
  ActionButton,
  FiltersContainer,
  SearchInput,
  FlightContainer,
  FlightHeader,
  PilotSelect
} from './PendingFlights.styled';
import { Text } from 'components/shared/Typography';
import { flightServices } from 'components/calendar/service';
import { Flight, Pilot } from 'components/calendar/types';
import { ContentContainer } from 'components/shared/Container';

const PendingFlights = () => {
  const [pendingFlights, setPendingFlights] = useState<Flight[]>([]);
  const [availablePilotsMap, setAvailablePilotsMap] = useState<Record<number, Pilot[]>>({});
  const [selectedPilotsMap, setSelectedPilotsMap] = useState<Record<number, number>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchPendingFlights = async () => {
    try {
      const allFlights = await flightServices.fetchFlights('ADMIN');
      const pending = allFlights.filter(flight => flight.status === 'PENDING');
      setPendingFlights(pending);
      
      // Fetch available pilots for each pending flight
      const pilotsMap: Record<number, Pilot[]> = {};
      for (const flight of pending) {
        const availabilityData = await flightServices.fetchPilotsAvailablePerSlot([{
          id: flight.id.toString(),
          start: flight.start,
          end: flight.end
        }]);
        pilotsMap[flight.id] = availabilityData[0]?.availablePilots || [];
      }
      setAvailablePilotsMap(pilotsMap);
    } catch (error) {
      console.error('Error fetching pending flights:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingFlights();
  }, []);

  const filteredFlights = pendingFlights.filter(flight => 
    flight.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePilotSelect = (flightId: number, pilotId: number) => {
    setSelectedPilotsMap(prev => ({
      ...prev,
      [flightId]: pilotId
    }));
  };

  const handlePilotAssign = async (flight: Flight) => {
    const selectedPilotId = selectedPilotsMap[flight.id];
    if (!selectedPilotId) return;

    try {
      const selectedPilot = availablePilotsMap[flight.id]?.find(p => p.id === selectedPilotId);
      if (!selectedPilot) return;

      const updatedFlight: Flight = {
        ...flight,
        assignedPilotId: selectedPilotId,
        assignedPilot: selectedPilot.user.name,
        status: 'BOOKED'
      };

      await flightServices.updateFlight(updatedFlight);
      await fetchPendingFlights(); // Refresh la liste
    } catch (error) {
      console.error('Error assigning pilot:', error);
    }
  };

  const handleRejectFlight = async (flight: Flight) => {
    try {
      await flightServices.deleteFlight(flight.id);
      await fetchPendingFlights();
    } catch (error) {
      console.error('Error deleting flight:', error);
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <ContentContainer $width="100%">
      <FiltersContainer>
        <SearchInput
          type="text"
          placeholder="Rechercher par nom de client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </FiltersContainer>
      <FlightContainer>
        {filteredFlights.map(flight => (
          <FlightCard key={flight.id}>
            <FlightHeader>
              <Text $centered $margin="2%" $fontSize="1.4rem" $fontWeight="bold">
                {flight.clientName}
              </Text>
            </FlightHeader>

            <FlightInfo>
              <InfoItem>
                <Label>Date</Label>
                <Value>{format(flight.start, 'dd/MM/yyyy')}</Value>
              </InfoItem>
              <InfoItem>
                <Label>Horaire</Label>
                <Value>
                  {format(flight.start, 'HH:mm')} - {format(flight.end, 'HH:mm')}
                </Value>
              </InfoItem>
              {flight.notes && (
                <InfoItem>
                  <Label>Notes</Label>
                  <Value>{flight.notes}</Value>
                </InfoItem>
              )}
              <InfoItem>
                <Label>Pilote</Label>
                <PilotSelect
                  value={selectedPilotsMap[flight.id] || ''}
                  onChange={(e) => handlePilotSelect(flight.id, Number(e.target.value))}
                >
                  <option value="">Sélectionner un pilote</option>
                  {availablePilotsMap[flight.id]?.map(pilot => (
                    <option key={pilot.id} value={pilot.id}>
                      {pilot.user.name}
                    </option>
                  ))}
                </PilotSelect>
              </InfoItem>
            </FlightInfo>

            <Actions>
              <ActionButton onClick={() => handleRejectFlight(flight)} $variant="danger">
                <XCircle size={18} />
                Refuser
              </ActionButton>
              <ActionButton 
                onClick={() => handlePilotAssign(flight)} 
                $variant="primary"
                disabled={!selectedPilotsMap[flight.id]}
              >
                <CheckCircle size={18} />
                Assigner le pilote
              </ActionButton>
            </Actions>
          </FlightCard>
        ))}
      </FlightContainer>

      {filteredFlights.length === 0 && (
        <div>Aucun vol en attente trouvé</div>
      )}
    </ContentContainer>
  );
};

export default PendingFlights;