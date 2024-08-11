// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import HotelsData from './Hotels.json'; // Adjust the path if necessary
// import HotelsList from './HotelsList';

// function HotelsPage() {
//     const location = useLocation();
//     const { destinationType, location: searchLocation } = location.state || {};
//     const [selectedHotel, setSelectedHotel] = useState(null);
//     const [drafts, setDrafts] = useState([]);
//     const [completedBookings, setCompletedBookings] = useState([]);
//     const [ongoingVisits, setOngoingVisits] = useState([]);

//     const handleBookNow = (hotel) => {
//         setSelectedHotel(hotel);
//     };

//     const handleBookingSubmit = (e) => {
//         e.preventDefault();
//         alert('Booking submitted!');
//         setSelectedHotel(null);
//     };

//     const handleCancel = () => {
//         // Save draft and close the form
//         setDrafts(prevDrafts => [...prevDrafts, selectedHotel]);
//         setSelectedHotel(null);
//     };

//     const handleConfirmBooking = () => {
//         // Handle booking confirmation
//         setCompletedBookings(prevBookings => [...prevBookings, selectedHotel]);
//         setSelectedHotel(null);
//     };

//     console.log('Hotels Data:', HotelsData); // Debugging

//     const filteredHotels = HotelsData.filter(
//         hotel =>
//             (destinationType === '' || hotel.type === destinationType) &&
//             (searchLocation === '' || hotel.location.toLowerCase().includes(searchLocation.toLowerCase()))
//     );

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Available Hotels</h1>
//             <HotelsList hotels={filteredHotels} onBookNow={handleBookNow} />

//             {selectedHotel && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//                         <h2 className="text-xl font-bold mb-4">Booking Form for {selectedHotel.name}</h2>
//                         <form onSubmit={handleBookingSubmit}>
//                             <div className="mb-4">
//                                 <label htmlFor="checkInDate" className="block text-sm font-medium mb-1">Check-In Date:</label>
//                                 <input
//                                     type="datetime-local"
//                                     id="checkInDate"
//                                     className="border border-gray-300 rounded-lg p-2 w-full"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="checkOutDate" className="block text-sm font-medium mb-1">Check-Out Date:</label>
//                                 <input
//                                     type="datetime-local"
//                                     id="checkOutDate"
//                                     className="border border-gray-300 rounded-lg p-2 w-full"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex justify-end space-x-4">
//                                 <button
//                                     type="button"
//                                     onClick={handleCancel}
//                                     className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400"
//                                 >
//                                     Save as Draft
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
//                                 >
//                                     Confirm Booking
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* Display ongoing activities */}
//             <div className="mt-8">
//                 <h3 className="text-xl font-bold mb-4">Ongoing Activities</h3>
//                 <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
//                     <h4 className="text-lg font-semibold mb-2">Visits</h4>
//                     {ongoingVisits.length > 0 ? (
//                         <ul>
//                             {ongoingVisits.map((visit, index) => (
//                                 <li key={index} className="mb-2">{visit.name}</li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No ongoing visits.</p>
//                     )}
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
//                     <h4 className="text-lg font-semibold mb-2">Draft Bookings</h4>
//                     {drafts.length > 0 ? (
//                         <ul>
//                             {drafts.map((draft, index) => (
//                                 <li key={index} className="mb-2">{draft.name}</li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No draft bookings.</p>
//                     )}
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                     <h4 className="text-lg font-semibold mb-2">Completed Bookings</h4>
//                     {completedBookings.length > 0 ? (
//                         <ul>
//                             {completedBookings.map((booking, index) => (
//                                 <li key={index} className="mb-2">{booking.name}</li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No completed bookings.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HotelsPage;
