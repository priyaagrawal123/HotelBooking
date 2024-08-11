// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // Perform any logout logic here, if necessary
//         navigate('/');
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//                 <h2 className="text-3xl font-bold text-center mb-6">Dashboard</h2>
//                 <p className="text-center mb-4">Welcome to your dashboard!</p>
//                 <div className="flex flex-col items-center">
//                     <button
//                         onClick={handleLogout}
//                         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 w-full"
//                     >
//                         Logout
//                     </button>
//                     <button
//                         onClick={() => navigate('/')}
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//                     >
//                         Back to Login
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;
