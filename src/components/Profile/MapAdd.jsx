import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import { saveLocation } from "../../store/LocationSlice";
import "leaflet/dist/leaflet.css";
import Loader from "../loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import './profile.css';
import { addUserAddress } from "../../services/apiRestaurant";

const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const LocationMarker = ({ setMarkerPosition }) => {
  useMapEvents({
    click(e) {
      setMarkerPosition(e.latlng);
    },
  });

  return null;
};

const MapCenter = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  return null;
};

const getNextId = () => {
  const lastId = localStorage.getItem('lastId');
  const nextId = lastId ? parseInt(lastId, 10) + 1 : 1;
  localStorage.setItem('lastId', nextId);
  return nextId;
};

const MapAdd = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [placeName, setPlaceName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  const handleSearchLocation = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&addressdetails=1&limit=1`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const latLng = { lat: parseFloat(lat), lng: parseFloat(lon) };
        setSearchLocation(latLng);
        setMarkerPosition(latLng);
      } else {
        toast.error("Location not found");
      }
    } catch (error) {
      console.error("Error fetching search location:", error);
      toast.error("Error fetching search location");
    }
  };
  const handleAddAddress = async (address) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await addUserAddress(address);
      setSuccessMessage('Address added successfully!');
      console.log('Address added:', response);
    } catch (error) {
      console.error('Error adding address:', error);
      setError('Failed to add address');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveLocation = async () => {
    if (markerPosition) {
      const plainMarkerPosition = { lat: markerPosition.lat, lng: markerPosition.lng };

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${plainMarkerPosition.lat}&lon=${plainMarkerPosition.lng}&format=json`
        );
        const data = await response.json();
        const place = data.display_name || "Unknown location";
        setPlaceName(place);

        if (!place) {
          toast.error('Please select a location on the map');
        } else {
          const id = getNextId(); // Get the next ID
          dispatch(saveLocation({ id, placeName: place }));
          console.log(place)
          handleAddAddress(place)
          toast.success("Location saved successfully");
        }
      } catch (error) {
        console.error("Error fetching place name:", error);
      }
    } else {
      toast.error('Please select a location on the map');
    }
  };

  return (
    <div className="map-container">
      <div className="searchContainer">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ابحث عن موقع"
          className="search-input"
        />
        <button className="btn btn-primary search-button" onClick={handleSearchLocation}>
          بحث
        </button>
      </div>
      {currentPosition ? (
        <MapContainer
          style={{ height: "400px", width: "100%" }}
          center={currentPosition}
          zoom={13}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapCenter center={searchLocation} />
          {markerPosition && <Marker position={markerPosition} icon={markerIcon} />}
          <LocationMarker setMarkerPosition={setMarkerPosition} />
        </MapContainer>
      ) : (
        <Loader />
      )}
      <div className="map-overlay d-flex align-items-center justify-content-center">
        <button className="btn btn-primary text-center btnAddress" onClick={handleSaveLocation}>
          احفظ الموقع
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MapAdd;
