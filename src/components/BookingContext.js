import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export function useBooking() {
    return useContext(BookingContext);
}

export function BookingProvider({ children }) {
    const [bookings, setBookings] = useState([]);

    const addBooking = (booking) => {
        setBookings((prevBookings) => [...prevBookings, booking]);
    };

    return (
        <BookingContext.Provider value={{ bookings, addBooking }}>
            {children}
        </BookingContext.Provider>
    );
}
