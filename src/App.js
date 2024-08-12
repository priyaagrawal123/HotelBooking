import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelsList from './components/HotelsList';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from "./components/Signup";
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import BookingForm from './components/BookingForm';
import HotelDetails from './components/HotelDetails';
import { OngoingActivitiesProvider } from './components/OngoingActivitiesContext';
import hotelsData from './components/Hotels.json';
import UserProfile from './components/UserProfile';
import { BookingProvider } from './components/BookingContext'; // Import the provider
import Bookings from './components/Bookings';
import { HotelProvider } from './components/HotelContext';

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Categorize hotels based on ratings
  const affordableHotels = hotelsData.filter(hotel => hotel.rating === '⭐⭐' || hotel.rating === '⭐');
  const threeStarHotels = hotelsData.filter(hotel => hotel.rating === '⭐⭐⭐');
  const fiveStarHotels = hotelsData.filter(hotel => hotel.rating === '⭐⭐⭐⭐⭐');
  const luxuryHotels = hotelsData.filter(hotel => hotel.rating === '✨');

  const handleBookingConfirm = (hotel) => {
    // Update your booking state or perform other actions
    alert(`Booking confirmed for ${hotel.name}`);
  };

  const handleClose = () => {
    setShowBookingForm(false);
  };

  return (
    <Router>
      <HotelProvider>
        <BookingProvider>

          <Navbar />
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/dashboard" element={<UserProfile />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/affordable" element={<HotelsList hotels={affordableHotels} setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
            <Route path="/3star" element={<HotelsList hotels={threeStarHotels} setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
            <Route path="/5star" element={<HotelsList hotels={fiveStarHotels} setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
            <Route path="/luxury" element={<HotelsList hotels={luxuryHotels} setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
            <Route path="/hotel/:id" element={<HotelDetails setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
            {/* <Route path="/" element={<Admin onBookingConfirm={handleBookingConfirm} />} /> */}
            <Route path="/booking/:id" element={<BookingForm />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
        </BookingProvider>
      </HotelProvider>
    </Router>

  );
}

export default App;
