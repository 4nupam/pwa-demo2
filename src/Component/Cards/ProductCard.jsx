import React from "react";
import { FaStar } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import { BiLeaf } from "react-icons/bi";
import { TbMeat } from "react-icons/tb";
import { FiMinus, FiPlus } from "react-icons/fi";
import useCartStore from "../../Zustand/useCartStore";

export default function ProductCard({ product }) {
  const {
    name,
    description,
    image,
    price,
    veg,
    spicy_level,
    rating,
    tags,
    available,
    id,
  } = product;

  const { addToCart, removeFromCart, getQuantity } = useCartStore();
  const quantity = getQuantity(id);

  return (
    <div className="max-w-sm w-full bg-white/80 border border-[#e2c9b2] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.015] overflow-hidden flex flex-col justify-between">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
        />
        <span
          className={`absolute top-3 right-3 text-xl p-2 rounded-full shadow-md ${
            veg ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
          title={veg ? "Vegetarian" : "Non-Vegetarian"}
        >
          {veg ? <BiLeaf /> : <TbMeat />}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-[#4B0F0F] mb-1 tracking-tight">{name}</h3>
          <p className="text-sm text-gray-700 mb-3 leading-relaxed line-clamp-2">{description}</p>

          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold text-[#F4A300]">₹{price}</span>
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <FaStar className="text-md" />
              <span className="font-medium">{rating}</span>
            </div>
          </div>

          {/* Tags and Spicy Level */}
          <div className="flex flex-wrap gap-2 mb-4">
            {spicy_level > 0 && (
              <span className="flex items-center text-xs px-2 py-1 rounded-full bg-red-500 text-white shadow">
                <GiChiliPepper className="mr-1" /> Spicy x{spicy_level}
              </span>
            )}
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#FCEED5] text-gray-800 px-3 py-0.5 rounded-full text-xs shadow-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Order or Counter Buttons */}
        <div className="mt-auto">
          {available ? (
            quantity === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="w-full py-2 rounded-full bg-[#6A1B1A] text-[#FFD700] font-semibold text-sm hover:bg-[#922B21] transition-all"
              >
                Order Now
              </button>
            ) : (
             <div className="flex items-center justify-between w-full bg-[#6A1B1A] text-[#FFD700] rounded-full shadow-inner overflow-hidden">
  <button
    onClick={() => removeFromCart(id)}
    className="w-1/3 py-2 flex items-center justify-center text-xl hover:bg-[#4B0F0F] transition-all"
    aria-label="Decrease quantity"
  >
    <FiMinus />
  </button>
  <div className="w-1/3 py-2 text-center font-bold text-base select-none">
    {quantity}
  </div>
  <button
    onClick={() => addToCart(product)}
    className="w-1/3 py-2 flex items-center justify-center text-xl hover:bg-[#4B0F0F] transition-all"
    aria-label="Increase quantity"
  >
    <FiPlus />
  </button>
</div>

            )
          ) : (
            <button
              disabled
              className="w-full py-2 rounded-full bg-gray-200 text-gray-500 font-medium cursor-not-allowed text-sm"
            >
              Currently Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
