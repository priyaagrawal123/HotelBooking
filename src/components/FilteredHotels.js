// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import hotelData from './hotels.json'; // Adjust the path to your JSON file

// function FilteredHotels({ filter }) {
//     const filterMapping = {
//         "Affordable": "Affordable",
//         "3-Star": "⭐⭐⭐",
//         "5-Star": "⭐⭐⭐⭐⭐",
//         "Luxury": "✨"
//     };

//     const filteredHotels = hotelData.filter(hotel => hotel.rating === filterMapping[filter] || hotel.type === filterMapping[filter]);

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-4">{filter} Hotels</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {filteredHotels.map(hotel => (
//                     <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                         <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-48 object-cover" />
//                         <div className="p-4">
//                             <h2 className="text-xl font-semibold">{hotel.name}</h2>
//                             <p className="text-gray-600">{hotel.location}</p>
//                             <p className="text-gray-900 font-bold">{hotel.Price}</p>
//                             <Link to={`/hotel/${hotel.id}`} className="text-blue-500 hover:underline mt-2 block">View Details</Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default FilteredHotels;
