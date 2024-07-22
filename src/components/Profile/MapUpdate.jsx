import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './profile.css';
import { updateAddress as updateAddressAction } from '../../store/LocationSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function MapUpdate(id) {
    const location = useSelector(state => state.location.locations);
    const [ShowAddressText, SetShowAddressText] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const addressToUpdate = location.find(item => item.id === id.address);
        if (addressToUpdate) {
            SetShowAddressText(addressToUpdate.placeName || '');
        }
    }, [location, id]);

    const handleSaveLocation = () => {
        if (ShowAddressText.trim()) {
            dispatch(updateAddressAction({ id: id.address, placeName: ShowAddressText }));
            toast.success("Location updated successfully");
        } else {
            toast.error("Please enter a valid location");
        }
    };

    return (
        <>
            <div className="map-container">
                <div className="searchContainer">
                    <input
                        type="text"
                        value={ShowAddressText}
                        onChange={(e) => {
                            SetShowAddressText(e.target.value);
                            setNewAddress(e.target.value);
                        }}
                        placeholder="ابحث عن موقع"
                        className="search-input"
                    />
                </div>

                <div className="map-overlay d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary text-center btnAddress" onClick={handleSaveLocation}>
                        Update
                    </button>
                </div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
        </>
    );
}
