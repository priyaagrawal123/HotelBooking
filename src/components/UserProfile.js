import React, { useEffect, useState } from 'react';
import customerData from './Customer.json'; // Adjust the path as needed

function UserProfile() {
    const [userEmail, setUserEmail] = useState('');
    const [draftBookings, setDraftBookings] = useState([]);
    const [completedBookings, setCompletedBookings] = useState([]);

    useEffect(() => {
        // Retrieve user email from sessionStorage
        const email = sessionStorage.getItem('userEmail');
        setUserEmail(email || 'Not Available');

        // Set the draft and completed bookings from imported JSON data
        setDraftBookings(customerData.draftBookings);
        setCompletedBookings(customerData.completedBookings);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white opacity-90 mt-10 p-2 rounded-lg shadow-lg max-w-4xl w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
                <p className="mb-4 text-center"><strong>User Email:</strong> {userEmail}</p>

                <div className="flex justify-between space-x-4">
                    <div className="w-full bg-gray-50 p-4 rounded-lg shadow-sm flex-1">
                        <h3 className="text-xl font-semibold mb-4">Draft Bookings</h3>
                        {draftBookings.length > 0 ? (
                            <ul className="space-y-3">
                                {draftBookings.map((booking, index) => (
                                    <li key={index} className="border p-3 rounded-lg shadow-sm">
                                        <p><strong>Hotel Name:</strong> {booking.hotelName}</p>
                                        <p><strong>Check-In Date:</strong> {booking.checkInDate}</p>
                                        <p><strong>Check-In Time:</strong> {booking.checkInTime}</p>
                                        <p><strong>Check-Out Date:</strong> {booking.checkOutDate}</p>
                                        <p><strong>Check-Out Time:</strong> {booking.checkOutTime}</p>

                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No draft bookings found.</p>
                        )}
                    </div>

                    <div className="w-full bg-gray-50 p-4 rounded-lg shadow-sm flex-1">
                        <h3 className="text-xl font-semibold mb-4">Completed Bookings</h3>
                        {completedBookings.length > 0 ? (
                            <ul className="space-y-3">
                                {completedBookings.map((booking, index) => (
                                    <li key={index} className="border p-3 rounded-lg shadow-sm">
                                        <p><strong>Hotel Name:</strong> {booking.hotelName}</p>
                                        <p><strong>Check-In Date:</strong> {booking.checkInDate}</p>
                                        <p><strong>Check-In Time:</strong> {booking.checkInTime}</p>
                                        <p><strong>Check-Out Date:</strong> {booking.checkOutDate}</p>
                                        <p><strong>Check-Out Time:</strong> {booking.checkOutTime}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No completed bookings found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
