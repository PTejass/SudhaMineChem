import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
const createCustomIcon = (color: string = "#3b82f6") => {
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0zm0 17c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="${color}"/>
      </svg>
    `)}`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="41" height="41" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.5" cy="20.5" r="20" fill="rgba(0,0,0,0.2)"/>
      </svg>
    `)}`,
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });
};

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  height?: string;
  className?: string;
}

export default function InteractiveMap({ 
  latitude, 
  longitude, 
  zoom = 13, 
  height = "400px",
  className = ""
}: MapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        className={`bg-muted/50 rounded-xl flex items-center justify-center border border-border ${className}`}
        style={{ height }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl overflow-hidden border border-border ${className}`} style={{ height }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={[latitude, longitude]}
          icon={createCustomIcon("#3b82f6")}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold text-sm mb-1">Our Factory Location</h3>
              <p className="text-xs text-gray-600">
                Visit our state-of-the-art manufacturing facility
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
