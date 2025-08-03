import React from 'react';
import Data from "../Component/Datastore.json";
import useCartStore from '../Zustand/useCartStore';

function Beverages() {
  const beverageCategory = Data.restaurant.menu.find(
    (cat) => cat.category === "Bar & Liquor"
  );
  const beverages = beverageCategory?.items || [];

  // Access Zustand store functions
  const { addToCart, getQuantity } = useCartStore();

  return (
    <section className="min-h-screen w-full bg-[#FFF8F0] px-4 md:px-10 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B0000] font-serif mb-2">
          Bar & Beverages
        </h1>
        <p className="text-[#1C1C1C] text-sm md:text-base max-w-xl mx-auto">
          Sip in royalty. Explore our curated collection of fine liquors and cocktails.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {beverages.length > 0 ? (
          beverages.map((item) => {
            const quantity = getQuantity(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition duration-300 relative"
              >
                {/* Cart Quantity Badge */}
                {quantity > 0 && (
                  <div className="absolute top-2 right-2 bg-[#8B0000] text-white text-xs px-2 py-1 rounded-full">
                    {quantity}
                  </div>
                )}

                {/* Image */}
                <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.image || "https://via.placeholder.com/300x200?text=Drink"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Description */}
                <h2 className="text-lg font-semibold text-[#2c2c2c] mb-1">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {item.description || "A premium blend to elevate your evening."}
                </p>

                {/* Price & Button */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[var(--color-burgundy-red)] font-semibold text-base">
                    ₹{item.price}
                  </span>
                  <button
                    className="bg-[#8B0000] hover:bg-[#a31515] text-white px-4 py-1 rounded-lg text-sm"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No beverages available.
          </p>
        )}
      </div>
    </section>
  );
}

export default Beverages;
