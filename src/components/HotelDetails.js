import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hotelData from './HotelDetails.json';
import BookingForm from './BookingForm';

function HotelDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);

    useEffect(() => {
        const hotelDetail = hotelData.find(h => h.id === parseInt(id));
        setHotel(hotelDetail);
    }, [id]);

    const handleBookNow = () => {
        setSelectedHotel(hotel);
    };

    const handleCloseForm = () => {
        setSelectedHotel(null);
    };

    if (!hotel) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 mt-9">
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

                <div className="flex justify-between mt-4">
                    <button
                        onClick={handleBookNow}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {selectedHotel && (
                <BookingForm
                    hotel={selectedHotel}
                    onClose={handleCloseForm}
                />
            )}
        </div>
    );
}

export default HotelDetails;
