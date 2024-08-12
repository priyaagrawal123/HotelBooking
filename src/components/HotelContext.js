import React, { createContext, useState, useContext } from 'react';

const HotelContext = createContext();

export function useHotel() {
    return useContext(HotelContext);
}

export function HotelProvider({ children }) {
    const [hotelVisits, setHotelVisits] = useState({});
    const [draftBookings, setDraftBookings] = useState([]);

    const incrementVisit = (hotelName) => {
        setHotelVisits((prevVisits) => ({
            ...prevVisits,
            [hotelName]: (prevVisits[hotelName] || 0) + 1,
        }));
    };

    const addDraftBooking = (booking) => {
        setDraftBookings((prevBookings) => [...prevBookings, booking]);
    };

    return (
        <HotelContext.Provider value={{ hotelVisits, incrementVisit, draftBookings, addDraftBooking }}>
            {children}
        </HotelContext.Provider>
    );
}
