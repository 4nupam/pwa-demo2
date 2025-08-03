import React, { useState } from 'react';

function BookDining() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequest: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.guests ||
      parseInt(formData.guests) <= 0
    ) {
      alert("Please fill out all required fields correctly.");
      return;
    }

    console.log('Booking Data:', formData);
    setShowModal(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      specialRequest: ''
    });
  };

  // Get today’s date in yyyy-mm-dd format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="relative mb-20 w-full flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6  rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book Your Dining</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              min={today}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-red-400"
            min="1"
            required
          />

          <textarea
            name="specialRequest"
            placeholder="Special Requests (optional)"
            value={formData.specialRequest}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-red-400"
            rows="3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4  transition duration-200"
          >
            Book Now
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center animate-bounce">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Booking Successful!</h3>
            <p className="text-gray-700">We’ve received your reservation.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDining;
