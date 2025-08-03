import React from "react";
import HeroSection from "../Component/HeroSection";
import Data from "../Component/Datastore.json";
import MenuComp from "../Component/MenuComp";
import BookDining from "../Component/BookDining";

function Home() {
  const Features = Data.restaurant.features;

  return (
    <section className="flex flex-col mb-20 items-start w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full px-4 py-8 flex flex-col items-center bg-[var(--color-cream-white)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--color-burgundy-red)] font-primary">
          What We Offer
        </h2>

        <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-[var(--color-slate-black)]">
          {Features.map((feature, index) => (
            <li
              key={index}
              className="px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg font-semibold transition-all duration-300 font-secondary"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Menu Section */}
      <MenuComp />


      <BookDining/>
    </section>
  );
}

export default Home;
