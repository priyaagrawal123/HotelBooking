// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Recommendations = ({ userId }) => {
//     const [recommendations, setRecommendations] = useState([]);

//     useEffect(() => {
//         const fetchRecommendations = async () => {
//             const response = await axios.get(`/api/users/${userId}/recommendations`); // Replace with your API endpoint
//             setRecommendations(response.data);
//         };

//         fetchRecommendations();
//     }, [userId]);

//     return (
//         <div>
//             <h2 className="text-2xl font-bold mb-4">Recommended Hotels</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {recommendations.map((hotel) => (
//                     <div key={hotel._id} className="bg-white shadow-md rounded-lg p-4">
//                         <h3 className="text-xl font-semibold">{hotel.name}</h3>
//                         <p>{hotel.location}</p>
//                         <p>Rating: {hotel.rating}</p>
//                         <p>Price: ${hotel.price}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Recommendations;
