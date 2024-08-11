import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOngoingActivities } from '../OngoingActivitiesContext';
import hotelData from './HotelDetails.json'; // Adjust the path to your JSON file

function HotelDetails() {
    const { id } = useParams(); // Get the hotel ID from the URL
    const [hotel, setHotel] = useState(null); // State to store hotel details
    const { visits, setVisits } = useOngoingActivities(); // Use context for ongoing activities

    useEffect(() => {
        // Find the hotel details by ID
        const hotelDetail = hotelData.find(h => h.id === parseInt(id));

        if (hotelDetail) {
            setHotel(hotelDetail); // Set the hotel details in state

            // Check if the hotel is already in the visits list to avoid duplicates
            const isAlreadyVisited = visits.some(visit => visit.id === hotelDetail.id);
            if (!isAlreadyVisited) {
                setVisits([...visits, { id: hotelDetail.id, name: hotelDetail.name }]); // Update visits in context
            }
        }
    }, [id, visits, setHotel, setVisits]); // Include all necessary dependencies

    if (!hotel) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>; // Show loading state
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                <h1 className="text-3xl font-bold mb-4 text-center">{hotel.name}</h1>
                <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-64 object-cover rounded-md mb-4" />
                <p className="text-lg mb-2"><strong>Location:</strong> {hotel.location}</p>
                <p className="text-lg mb-2"><strong>Price:</strong> {hotel.Price}</p>
                <p className="text-lg mb-2"><strong>Rating:</strong> {hotel.rating}</p>
                <p className="text-lg mb-2"><strong>AC Room Available:</strong> {hotel.acRoomAvailable ? 'Yes' : 'No'}</p>
                <p className="text-lg mb-2"><strong>Non-AC Room Available:</strong> {hotel.nonAcRoomAvailable ? 'Yes' : 'No'}</p>
                <p className="text-lg mb-2"><strong>Availability:</strong> {hotel.availability}</p>
                <p className="text-lg mb-2"><strong>Room Available Type:</strong> {hotel.roomAvailableType}</p>
            </div>
        </div>
    );
}

export default HotelDetails;
