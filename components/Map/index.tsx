import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapWrapper, GradientBottom, GradientLeft, GradientTop, GradientRight } from './contactMap.styled';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Imports dynamiques pour tous les composants leaflet
const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
);

interface ContactMapProps {
  position: [number, number];
  zoom: number;
}

const ContactMap: React.FC<ContactMapProps> = ({ position, zoom }) => {
  const [isClient, setIsClient] = useState(false);
  const [markerIcon, setMarkerIcon] = useState<Icon | null>(null);

  useEffect(() => {
    // Import Leaflet uniquement côté client
    import('leaflet').then(L => {
      setMarkerIcon(
        new L.Icon({
          iconRetinaUrl: 'images/marker-icon-2x.png',
          iconUrl: 'images/marker-icon.png',
          shadowUrl: 'images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      );
      setIsClient(true);
    });
  }, []);

  if (!isClient || !markerIcon) {
    return (
      <MapWrapper>
        <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Loading map...
        </div>
      </MapWrapper>
    );
  }

  return (
    <MapWrapper>
      <GradientLeft />
      <GradientTop />
      <GradientBottom />
      <GradientRight />
      <MapContainer 
        center={position} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            Nous sommes ici !
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default ContactMap;