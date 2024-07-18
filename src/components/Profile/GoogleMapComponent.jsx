import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div style={{ color: 'red' }}>{text}</div>;



function GoogleMapComponent({apiKey}) {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  const handleMapClick = ({ lat, lng }) => {
    setMarkerPosition({ lat, lng });
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={currentPosition}
        defaultZoom={15}
        center={currentPosition}
        onClick={handleMapClick}
      >
        {markerPosition && (
          <Marker lat={markerPosition.lat} lng={markerPosition.lng} text="Marker" />
        )}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapComponent
