import React, { useState } from 'react';

function PaymentPopup({ amount, onConfirm, onClose }) {
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleMethodChange = (e) => {
        setSelectedMethod(e.target.value);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-xl font-semibold mb-4">Payment</h3>
                <p className="mb-4">Hotel Room Booking: ${amount}</p>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Payment Method:</label>
                    <select
                        value={selectedMethod}
                        onChange={handleMethodChange}
                        className="block w-full border border-gray-300 rounded-lg p-2"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="QR">QR</option>
                        <option value="UPI">UPI</option>
                        <option value="Credit/Debit Card">Credit/Debit Card</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onConfirm}
                        disabled={!selectedMethod}
                        className={`py-2 px-4 rounded ${selectedMethod ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentPopup;
