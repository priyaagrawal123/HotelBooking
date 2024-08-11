import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy function to simulate checking if an email is already registered
const checkIfEmailExists = (email) => {
    // Replace this with your actual check (e.g., API call)
    const existingUsers = ['test@gmail.com']; // Example existing users
    return existingUsers.includes(email);
};

function Signup() {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email already exists
        if (checkIfEmailExists(email)) {
            setErrorMessage('Email is already registered. Please use a different email.');
            return;
        }

        // Here you would typically handle form submission, e.g., send data to server
        console.log('Signup Details:', { username, phoneNumber, email, password });

        // Navigate to another page after successful signup
        navigate('/welcome'); // Adjust the path as needed
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                {errorMessage && (
                    <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded mb-4">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium mb-1">Username:</label>
                        <input
                            type="text" dff
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="block w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
                            className="block w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email (Gmail):</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Gmail address"
                            className="block w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="block w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-600">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
