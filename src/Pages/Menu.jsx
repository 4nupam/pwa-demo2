import React from 'react';
import MenuComp from '../Component/MenuComp';

function Menu() {
  return (
    <section className="min-h-screen w-full bg-[var(--color-cream-white)] px-4 md:px-10 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <span className="text-3xl md:text-4xl font-bold text-[var(--color-burgundy-red)] font-primary mb-2">
          Explore Our Menu
        </span>
        <p className="text-[var(--color-slate-black)] font-secondary text-sm md:text-base max-w-xl mx-auto">
          From sizzling starters to delicious desserts — discover dishes that satisfy every craving.
        </p>
      </div>

      {/* Menu Component */}
      <div className="max-w-7xl mx-auto">
        <MenuComp />
      </div>
    </section>
  );
}

export default Menu;
