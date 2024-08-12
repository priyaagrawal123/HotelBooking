import React, { useEffect, useState } from 'react';
import adminData from './Admin.json'; // Adjust the path as needed

function AdminDashboard() {
    const [draftBookings, setDraftBookings] = useState([]);
    const [completedBookings, setCompletedBookings] = useState([]);
    const [visits, setVisits] = useState([]);

    useEffect(() => {
        // Set the draft, completed bookings, and visits from imported JSON data
        setDraftBookings(adminData.draftBookings);
        setCompletedBookings(adminData.completedBookings);
        setVisits(adminData.visits);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white opacity-90 mt-12 p-2 rounded-lg shadow-lg max-w-3xl w-full">
                <h2 className="text-xl font-bold mb-4 text-center">Admin Dashboard</h2>

                <div className="flex space-x-3">
                    {/* Visits Section */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex-1 text-sm">
                        <h3 className="text-lg font-semibold mb-3">Visits</h3>
                        {visits.length > 0 ? (
                            <ul className="space-y-2">
                                {visits.map((visit, index) => (
                                    <li key={index} className="border p-2 rounded-lg shadow-sm">
                                        <p><strong>Hotel:</strong> {visit.hotelName}</p>
                                        <p><strong>Customer:</strong> {visit.customerName}</p>
                                        <p><strong>Email:</strong> {visit.email}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No visits found.</p>
                        )}
                    </div>

                    {/* Draft Bookings Section */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex-1 text-sm">
                        <h3 className="text-lg font-semibold mb-3">Draft Bookings</h3>
                        {draftBookings.length > 0 ? (
                            <ul className="space-y-2">
                                {draftBookings.map((booking, index) => (
                                    <li key={index} className="border p-2 rounded-lg shadow-sm">
                                        <p><strong>Hotel:</strong> {booking.hotelName}</p>
                                        <p><strong>Check-In:</strong> {booking.checkInDate} {booking.checkInTime}</p>
                                        <p><strong>Check-Out:</strong> {booking.checkOutDate} {booking.checkOutTime}</p>
                                        <p><strong>Customer:</strong> {booking.customerName}</p>
                                        <p><strong>Email:</strong> {booking.email}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No draft bookings found.</p>
                        )}
                    </div>

                    {/* Completed Bookings Section */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex-1 text-sm">
                        <h3 className="text-lg font-semibold mb-3">Completed Bookings</h3>
                        {completedBookings.length > 0 ? (
                            <ul className="space-y-2">
                                {completedBookings.map((booking, index) => (
                                    <li key={index} className="border p-2 rounded-lg shadow-sm">
                                        <p><strong>Hotel:</strong> {booking.hotelName}</p>
                                        <p><strong>Check-In:</strong> {booking.checkInDate} {booking.checkInTime}</p>
                                        <p><strong>Check-Out:</strong> {booking.checkOutDate} {booking.checkOutTime}</p>
                                        <p><strong>Customer:</strong> {booking.customerName}</p>
                                        <p><strong>Email:</strong> {booking.email}</p>
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

export default AdminDashboard;