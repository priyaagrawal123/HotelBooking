import React, { useState } from 'react';
import hotels from './Hotels.json'; // Import the hotels JSON
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm'; // Adjust the path if necessary
import Navbar from './Navbar'; // Import the Navbar component

function Homepage() {
    const [destinationType, setDestinationType] = useState('');
    const [location, setLocation] = useState('');
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [searchClicked, setSearchClicked] = useState(false); // State to track if search was clicked
    const [filteredHotels, setFilteredHotels] = useState(hotels); // Use hotels JSON

    const handleBookNowClick = (hotel) => {
        setSelectedHotel(hotel);
        setShowBookingForm(true);
    };

    const handleCloseBookingForm = (hotel, isDraft) => {
        if (!isDraft) {
            // Logic for confirming the booking can be added here
        }
        setShowBookingForm(false);
        setSelectedHotel(null);
    };

    const handleSearch = () => {
        setSearchClicked(true);

        // Filter hotels based on the search criteria
        const newFilteredHotels = hotels.filter(hotel => {
            const matchesType = destinationType ? hotel.type === destinationType : true;
            const matchesLocation = location ? hotel.location.toLowerCase().includes(location.toLowerCase()) : true;
            return matchesType && matchesLocation;
        });

        setFilteredHotels(newFilteredHotels);
    };

    // Default to showing all hotels if search not clicked
    const hotelsToDisplay = searchClicked ? filteredHotels : hotels;

    const indiaHotels = hotelsToDisplay.filter(hotel => hotel.type === 'India');
    const internationalHotels = hotelsToDisplay.filter(hotel => hotel.type === 'International');

    return (
        <div className="pt-16"> {/* Ensure padding-top is enough to avoid overlap with the fixed navbar */}
            {/* Navbar */}
            <Navbar />

            <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg max-w-xl mx-auto my-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Find Your Perfect Hotel</h2>
                <form className="space-y-4 mb-8">
                    <div>
                        <label htmlFor="destinationType" className="block text-sm font-medium mb-1">Destination Type:</label>
                        <select
                            id="destinationType"
                            value={destinationType}
                            onChange={(e) => setDestinationType(e.target.value)}
                            className="block w-full border border-gray-300 rounded-lg p-2"
                        >
                            <option value="">Select</option>
                            <option value="India">India</option>
                            <option value="International">International</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium mb-1">Location:</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter city"
                            className="block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSearch} // Handle search click
                        className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-600"
                    >
                        Search Hotels
                    </button>
                </form>
            </div>

            {/* Display filtered hotels based on search or show all hotels */}
            <div className="mb-8 mx-4">
                <h3 className="text-xl font-semibold mb-4">India</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {indiaHotels.length > 0 ? (
                        indiaHotels.map(hotel => (
                            <div
                                key={hotel.id}
                                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                                style={{
                                    backgroundImage: `url(${hotel.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '250px', // Increased height to ensure text visibility
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-white">{hotel.name}</h3>
                                    <p className="text-gray-300 mb-1">{hotel.location}</p>
                                    <p className="text-gray-300 mb-1">{hotel.rating} ★</p> {/* Ensure rating is visible */}
                                    <p className="text-gray-300 mb-1 font-bold text-lg">{hotel.Price}</p> {/* Ensure price is visible */}
                                    {/* <Link to={`/hotel/${hotel.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link> */}
                                    <div className="flex space-x-4 mt-4">
                                        <button
                                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                                            onClick={() => handleBookNowClick(hotel)}
                                        >
                                            Book Now
                                        </button>
                                        <Link to={`/hotel/${hotel.id}`} className="py-2 px-4 inline-block bg-green-500 rounded text-white">View Details</Link>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No hotels found in India.</p>
                    )}
                </div>
            </div>

            <div className="mb-8 mx-4">
                <h3 className="text-xl font-semibold mb-4">International</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {internationalHotels.length > 0 ? (
                        internationalHotels.map(hotel => (
                            <div
                                key={hotel.id}
                                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                                style={{
                                    backgroundImage: `url(${hotel.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '250px', // Increased height to ensure text visibility
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-white">{hotel.name}</h3>
                                    <p className="text-gray-300 mb-1">{hotel.location}</p>
                                    <p className="text-gray-300 mb-1">{hotel.rating} ★</p> {/* Ensure rating is visible */}
                                    <p className="text-gray-300 mb-1 font-bold text-lg">{hotel.price}</p> {/* Ensure price is visible */}
                                    <div className="flex space-x-4 mt-4">
                                        <button
                                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                                            onClick={() => handleBookNowClick(hotel)}
                                        >
                                            Book Now
                                        </button>
                                        <Link to={`/hotel-details/${hotel.id}`}>
                                            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No international hotels found.</p>
                    )}
                </div>
            </div>

            {showBookingForm && (
                <BookingForm hotel={selectedHotel} onClose={handleCloseBookingForm} />
            )}
        </div>
    );
}

export default Homepage;
