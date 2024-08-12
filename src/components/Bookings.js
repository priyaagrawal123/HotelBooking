import React from 'react';
import { useBooking } from './BookingContext';

function Bookings() {
    const { bookings } = useBooking(); // Access the context

    return (
        <div>
            <h2>My Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                <ul>
                    {bookings.map((booking, index) => (
                        <li key={index}>
                            {booking.hotel} - {booking.checkIn} to {booking.checkOut}
                            {/* Display other booking details as needed */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Bookings;
