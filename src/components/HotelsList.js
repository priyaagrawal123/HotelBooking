import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';

function HotelsList({ hotels }) {
    const [selectedHotel, setSelectedHotel] = useState(null);

    const handleBookNow = (hotel) => {
        setSelectedHotel(hotel);
    };

    const handleCloseForm = () => {
        setSelectedHotel(null);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-8 text-center">Available Hotels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {hotels.length > 0 ? (
                    hotels.map(hotel => (
                        <div
                            key={hotel.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative"
                            style={{ height: '300px' }}
                        >
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${hotel.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-white">{hotel.name}</h3>
                                    <p className="text-gray-300">{hotel.location}</p>
                                    <p className="text-gray-400">{hotel.type}</p>
                                    <p className="text-gray-400">{hotel.rating}</p>
                                    <p className="text-gray-400">{hotel.price}</p>
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-8 flex flex-col gap-2">
                                <button
                                    onClick={() => handleBookNow(hotel)}
                                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                                >
                                    Book Now
                                </button>
                                <Link to={`/hotel/${hotel.id}`} className="text-white bg-green-600 rounded py-2 px-4 hover:underline">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No hotels found for your search criteria.</p>
                )}
            </div>

            {selectedHotel && (
                <BookingForm hotel={selectedHotel} onClose={handleCloseForm} />
            )}
        </div>
    );
}

export default HotelsList;
