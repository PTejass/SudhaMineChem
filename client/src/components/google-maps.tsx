import { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// Declare google namespace for TypeScript
declare const google: any;

interface GoogleMapsProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  height?: string;
  className?: string;
  apiKey?: string;
  forceEmbed?: boolean;
}

const render = (status: Status) => {
  if (status === Status.LOADING) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Google Maps...</p>
        </div>
      </div>
    );
  }

  if (status === Status.FAILURE) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-red-500 mb-4">⚠️</div>
          <p className="text-red-600 font-medium">Failed to load Google Maps</p>
          <p className="text-sm text-muted-foreground mt-2">
            Please check your API key configuration
          </p>
        </div>
      </div>
    );
  }

  return <></>;
};

function MapComponent({ latitude, longitude, zoom = 15 }: { latitude: number; longitude: number; zoom?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (ref.current && !map && typeof google !== "undefined") {
      const newMap = new google.maps.Map(ref.current, {
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          // Global desaturation for a grayscale, professional look
          {
            elementType: "geometry",
            stylers: [{ saturation: -100 }, { lightness: 10 }],
          },
          {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#9aa0a6" }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#1f2937" }],
          },
          // Roads subtle contrast
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#2a2f36" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f242b" }],
          },
          // Water toned down
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#1e242b" }],
          },
          // Hide POI labels
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      // Add marker
      new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: newMap,
        title: "Our Factory Location",
        icon: {
          url: `data:image/svg+xml;base64,${btoa(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
              <circle cx="16" cy="16" r="4" fill="#ffffff"/>
            </svg>
          `)}`,
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 16),
        },
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px;">
            <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #1f2937;">
              Our Factory Location
            </h3>
            <p style="margin: 0; font-size: 12px; color: #6b7280;">
              Visit our state-of-the-art manufacturing facility
            </p>
          </div>
        `,
      });

      // Add click listener to marker
      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: newMap,
        title: "Our Factory Location",
        icon: {
          url: `data:image/svg+xml;base64,${btoa(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
              <circle cx="16" cy="16" r="4" fill="#ffffff"/>
            </svg>
          `)}`,
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 16),
        },
      });

      marker.addListener("click", () => {
        infoWindow.open(newMap, marker);
      });

      setMap(newMap);
    }
  }, [ref, map, latitude, longitude, zoom]);

  return <div ref={ref} style={{ height: "100%", width: "100%" }} />;
}

export default function GoogleMaps({
  latitude,
  longitude,
  zoom = 15,
  height = "400px",
  className = "",
  apiKey,
  forceEmbed,
}: GoogleMapsProps) {
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


  // If embed mode is forced or no API key provided, render iframe-based Google Maps (no warning popup)
  if (forceEmbed || !apiKey || apiKey === 'your_google_maps_api_key_here') {
    const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
    return (
      <div className={`rounded-xl overflow-hidden border border-border ${className}`} style={{ height }}>
        <iframe
          title="Google Maps"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className={`rounded-xl overflow-hidden border border-border ${className}`} style={{ height }}>
      <Wrapper apiKey={apiKey} render={render}>
        <MapComponent latitude={latitude} longitude={longitude} zoom={zoom} />
      </Wrapper>
    </div>
  );
}
