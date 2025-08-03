import React from "react";
import Data from "../Component/Datastore.json";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";

function About() {
  const aboutData = Data.restaurant;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <span className="text-4xl font-bold text-center text-red-700 mb-2">
        {aboutData.name}
      </span>
      <p className="text-lg text-center text-gray-600 italic mb-8">
        "{aboutData.tagline}"
      </p>

      <div className=" rounded-lg p-6 mb-6 space-y-4">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500" />
          <p className="text-gray-700 font-medium">{aboutData.contact.address}</p>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-green-500" />
          <p className="text-gray-700">{aboutData.contact.phone}</p>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-500" />
          <p className="text-gray-700">{aboutData.contact.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <FaClock className="text-yellow-500" />
          <p className="text-gray-700">Open: {aboutData.hours.time}</p>
        </div>
      </div>

      <div className=" rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">What We Offer</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
          {aboutData.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
