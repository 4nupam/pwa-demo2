import React from 'react';
import Data from "../Component/Datastore.json";

function Contact() {
  const details = Data.restaurant.contact;

  return (
    <section className="min-h-screen bg-[#FFF8F0] px-6 py-10 text-[#1C1C1C]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B0000] mb-2 font-serif">
          Contact Us
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-8 max-w-xl mx-auto">
          We're here to help. Reach out to us anytime!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#B02E0C]">{details.name}</h2>
          <p className="text-gray-700">{details.tagline}</p>

          <div>
            <h3 className="font-semibold text-[#B02E0C]">Address</h3>
            <p>{details.address}</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#B02E0C]">Phone</h3>
            <p>{details.phone}</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#B02E0C]">Email</h3>
            <p>{details.email}</p>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Contact;
