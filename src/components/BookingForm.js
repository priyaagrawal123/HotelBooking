import React, { useState, useEffect } from 'react';
import { useBooking } from './BookingContext'; // Import the BookingContext

function BookingForm({ hotel, onClose }) {
    const { addBooking } = useBooking(); // Access the context
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');
    const [showDraftMessage, setShowDraftMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [showPaymentPopup, setShowPaymentPopup] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleCancel = () => {
        const filledFields = [checkIn, checkOut, checkInTime, checkOutTime].filter(field => field.trim() !== '').length;

        if (filledFields > 1) {
            setMessage('Draft Saved');
            setShowDraftMessage(true);
        } else {
            setErrors({ draft: 'At least 2 fields need to be filled to save the draft.' });
        }
    };

    useEffect(() => {
        if (showDraftMessage) {
            const timer = setTimeout(() => {
                setShowDraftMessage(false);
                onClose(hotel, true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [showDraftMessage, onClose, hotel]);

    const handleConfirmBooking = () => {
        const validationErrors = validateFields();
        if (Object.keys(validationErrors).length === 0) {
            setShowPaymentPopup(true);
        } else {
            setErrors(validationErrors);
        }
    };

    const handlePaymentConfirm = () => {
        setShowPaymentPopup(false);
        setMessage('Booking Confirmed');
        setShowDraftMessage(true);
        setTimeout(() => {
            addBooking({
                hotel: hotel.name,
                checkIn,
                checkOut,
                checkInTime,
                checkOutTime
            });
            onClose(hotel, false); // Close after showing the booking confirmation
        }, 1000);
    };

    const validateFields = () => {
        const errors = {};

        if (!checkIn) errors.checkIn = 'Check-In date is required.';
        if (!checkOut) errors.checkOut = 'Check-Out date is required.';
        if (!checkInTime) errors.checkInTime = 'Check-In time is required.';
        if (!checkOutTime) errors.checkOutTime = 'Check-Out time is required.';

        const checkInTimeHour = parseInt(checkInTime.split(':')[0], 10);
        const checkInTimeMinute = parseInt(checkInTime.split(':')[1], 10);

        const checkOutTimeHour = parseInt(checkOutTime.split(':')[0], 10);
        const checkOutTimeMinute = parseInt(checkOutTime.split(':')[1], 10);

        if (checkInTime && (checkInTimeHour < 6 || (checkInTimeHour === 12 && checkInTimeMinute > 0) || checkInTimeHour > 24)) {
            errors.checkInTime = 'Check-In time must be between 6:00 AM and 12:00 AM.';
        }

        if (checkOutTime && (checkOutTimeHour < 6 || (checkOutTimeHour === 12 && checkOutTimeMinute > 0) || checkOutTimeHour > 24)) {
            errors.checkOutTime = 'Check-Out time must be between 6:00 AM and 12:00 AM.';
        }

        return errors;
    };

    const allFieldsFilled = checkIn && checkOut && checkInTime && checkOutTime;

    const handleCloseWithoutMessage = () => {
        onClose(hotel, false);
    };

    const handleMethodChange = (e) => {
        setSelectedMethod(e.target.value);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    onClick={handleCloseWithoutMessage}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-xl font-semibold mb-4">{hotel.name}</h3>
                <div className="mb-4">
                    <label htmlFor="checkIn" className="block text-sm font-medium mb-1">Check-In Date:</label>
                    <input
                        type="date"
                        id="checkIn"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className={`block w-full border ${errors.checkIn ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                        min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="checkInTime" className="block text-sm font-medium mb-1">Check-In Time:</label>
                    <input
                        type="time"
                        id="checkInTime"
                        value={checkInTime}
                        onChange={(e) => setCheckInTime(e.target.value)}
                        className={`block w-full border ${errors.checkInTime ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                    />
                    {errors.checkInTime && <p className="text-red-500 text-sm mt-1">{errors.checkInTime}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="checkOut" className="block text-sm font-medium mb-1">Check-Out Date:</label>
                    <input
                        type="date"
                        id="checkOut"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className={`block w-full border ${errors.checkOut ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                        min={checkIn || new Date().toISOString().split('T')[0]}
                    />
                    {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="checkOutTime" className="block text-sm font-medium mb-1">Check-Out Time:</label>
                    <input
                        type="time"
                        id="checkOutTime"
                        value={checkOutTime}
                        onChange={(e) => setCheckOutTime(e.target.value)}
                        className={`block w-full border ${errors.checkOutTime ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
                    />
                    {errors.checkOutTime && <p className="text-red-500 text-sm mt-1">{errors.checkOutTime}</p>}
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleCancel}
                        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleConfirmBooking}
                        disabled={!allFieldsFilled}
                        className={`py-2 px-4 rounded ${allFieldsFilled ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
                    >
                        Make Payment
                    </button>
                </div>
                {errors.draft && (
                    <p className="text-red-500 text-sm mt-4 text-center">{errors.draft}</p>
                )}
                {showDraftMessage && (
                    <div className="absolute top-0 left-0 right-0 bg-yellow-100 border border-yellow-300 p-4 rounded shadow-lg mt-4 text-center">
                        <p className="text-yellow-800">{message}</p>
                    </div>
                )}
                {showPaymentPopup && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                            <h4 className="text-lg font-semibold mb-4">Payment Options</h4>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Choose Payment Method:</label>
                                <select
                                    value={selectedMethod}
                                    onChange={handleMethodChange}
                                    className="block w-full border border-gray-300 rounded-lg p-2"
                                >
                                    <option value="" disabled>Select a method</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                                </select>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={handlePaymentConfirm}
                                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookingForm;
