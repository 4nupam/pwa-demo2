import React from "react";
import Data from "../Component/Datastore.json";


const HeroSection = () => {
  const tagline = Data.restaurant.tagline;
  
  const hours = Data.restaurant.hours.time;

  return (
    <section
      className="relative w-full h-[50vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/23526715/pexels-photo-23526715.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
     
        <p
          className="text-lg md:text-xl italic mb-6"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          “{tagline}”
        </p>
        <div
          className="text-sm  bg-opacity-20 px-4 py-2 rounded-full inline-block"
          style={{
            fontFamily: "var(--font-secondary)",
            color: "var(--color-cream-white)",
          }}
        >
          🕒 {hours}
        </div>
      </div>

  
    </section>
  );
};

export default HeroSection;
