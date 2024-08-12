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
        <div className="flex items-center justify-center min-h-screen p-4 mt-9">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg max-w-md w-full p-4 items-center justify-center">
                <h1 className="text-2xl font-bold mb-3 text-center">{hotel.name}</h1>
                <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-48 object-cover rounded-md mb-3" />
                <p className="text-base mb-1"><strong>Location:</strong> {hotel.location}</p>
                <p className="text-base mb-1"><strong>Price:</strong> {hotel.Price}</p>
                <p className="text-base mb-1"><strong>Rating:</strong> {hotel.rating}</p>
                <p className="text-base mb-1"><strong>AC Room Available:</strong> {hotel.acRoomAvailable ? 'Yes' : 'No'}</p>
                <p className="text-base mb-1"><strong>Non-AC Room Available:</strong> {hotel.nonAcRoomAvailable ? 'Yes' : 'No'}</p>
                <p className="text-base mb-1"><strong>Availability:</strong> {hotel.availability}</p>
                <p className="text-base mb-1"><strong>Room Available Type:</strong> {hotel.roomAvailableType}</p>

                <div className="flex justify-center mt-3">
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