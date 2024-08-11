import React from 'react';
import { useOngoingActivities } from '../OngoingActivitiesContext';

function Admin() {
    const { visits, draftBookings, completedBookings } = useOngoingActivities();

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-8 text-center">Admin - Ongoing Activities</h2>
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                <h4 className="text-lg font-semibold mb-2">Visits</h4>
                {visits.length > 0 ? (
                    <ul>
                        {visits.map((visit, index) => (
                            <li key={index} className="mb-2">{visit.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No ongoing visits.</p>
                )}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                <h4 className="text-lg font-semibold mb-2">Draft Bookings</h4>
                {draftBookings.length > 0 ? (
                    <ul>
                        {draftBookings.map((draft, index) => (
                            <li key={index} className="mb-2">{draft.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No draft bookings.</p>
                )}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-2">Completed Bookings</h4>
                {completedBookings.length > 0 ? (
                    <ul>
                        {completedBookings.map((booking, index) => (
                            <li key={index} className="mb-2">{booking.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No completed bookings.</p>
                )}
            </div>
        </div>
    );
}

export default Admin;
