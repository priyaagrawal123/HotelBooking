import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelsList from './components/HotelsList';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from "./components/Signup";
import Admin from './components/Admin';
import BookingForm from './components/BookingForm';
import HotelDetails from './components/HotelDetails';
import { OngoingActivitiesProvider } from './components/OngoingActivitiesContext'; // Adjust the path as needed
import hotelsData from './components/Hotels.json';


// Sample hotels data
const hotels = [
  { id: 1, name: "Hotel Paradise", location: "Delhi", type: "India", imageUrl: "./images/paradisedelhi.jpg", rating: "⭐⭐⭐", price: "₹1000/day" },
  { id: 2, name: "Ocean View Hotel", location: "Goa", type: "India", imageUrl: "./images/oceanviewgao.avif", rating: "⭐⭐", price: "₹1400/day" },
  { id: 3, name: "The Capital Hotel", location: "New Delhi", type: "India", imageUrl: "./images/image7.jpeg", rating: "⭐⭐⭐⭐⭐", price: "₹6000/day" },
  { id: 4, name: "Tropical Haven", location: "Kerala", type: "India", imageUrl: "./images/image3.jgeg", rating: "⭐", price: "₹7000/day" },
  { id: 5, name: "Beachfront Paradise", location: "Hawaii", type: "International", imageUrl: "./images/image9.jpeg", rating: "⭐⭐⭐", price: "$600/day" },
  { id: 6, name: "Sunset Beach Resort", location: "Maldives", type: "International", imageUrl: "./images/beach.jpg", rating: "⭐⭐⭐⭐⭐", price: "₹10000/day" },
  { id: 7, name: "Royal Orchid", location: "Singapore", type: "International", imageUrl: "./images/image6.jpeg", rating: "⭐⭐⭐⭐⭐", price: "₹5000/day" },
  { id: 8, name: "Canyon Lodge", location: "Grand Canyon", type: "International", imageUrl: "./images/image8.jpg", rating: "⭐⭐⭐⭐⭐", price: "$600/day" },
  { id: 9, name: "The Grand Oasis", location: "Dubai", type: "International", imageUrl: "./images/internatinalhotel.jpg", rating: "✨", price: "₹50000/day" },
  { id: 10, name: "Grand International", location: "New York", type: "International", imageUrl: "./images/internatinalhotel.jpg", rating: "✨", price: "₹3000/day" },
  { id: 11, name: "Luxury Suites", location: "London", type: "International", imageUrl: "./images/image7.jpeg", rating: "✨", price: "$500/day" },
  { id: 12, name: "Northern Lights Resort", location: "Norway", type: "International", imageUrl: "https://example.com/images/northern-lights-resort.jpg", rating: "⭐⭐⭐", price: "₹28000/day" },
];

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const affordableHotels = hotels.filter(hotel => hotel.rating === '⭐⭐⭐' || hotel.rating === '⭐⭐' || hotel.rating === '⭐');
  const threeStarHotels = hotels.filter(hotel => hotel.rating === '⭐⭐⭐');
  const fiveStarHotels = hotels.filter(hotel => hotel.rating === '⭐⭐⭐⭐⭐');
  const luxuryHotels = hotels.filter(hotel => hotel.rating === '✨');

  const handleBookingConfirm = (hotel) => {
    // Update your booking state or perform other actions
    alert(`Booking confirmed for ${hotel.name}`);
    // Optionally, set state to remove the hotel from the list or update the booking status
  };

  const handleClose = () => {
    setShowBookingForm(false);
  };

  return (
    <OngoingActivitiesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/affordable" element={<HotelsList hotels={affordableHotels} setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
          <Route path="/3star" element={<HotelsList hotels={threeStarHotels} setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
          <Route path="/5star" element={<HotelsList hotels={fiveStarHotels} setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
          <Route path="/luxury" element={<HotelsList hotels={luxuryHotels} setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
          <Route path="/hotel/:id" element={<HotelDetails setSelectedHotel={setSelectedHotel} setShowBookingForm={setShowBookingForm} />} />
          <Route path="/admin" element={<Admin onBookingConfirm={handleBookingConfirm} />} />
          <Route path="/" element={<HotelsList hotels={hotelsData} />} />
          <Route path="/booking/:id" element={<BookingForm />} />
        </Routes>
        {/* {showBookingForm && (
          <BookingForm
            hotel={selectedHotel}
            onClose={handleClose}
            onBookingConfirm={handleBookingConfirm}  // Pass the callback here
          />
        )} */}
      </Router>
    </OngoingActivitiesProvider>
  );
}

export default App;
