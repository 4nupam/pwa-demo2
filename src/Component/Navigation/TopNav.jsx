import React from "react";
import { FaHome } from "react-icons/fa";
import {
  MdOutlineFastfood,
  MdLiquor,
  MdOutlineContactPage,
} from "react-icons/md";
import { LuNotebookTabs } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Data from "../Datastore.json";

const TopNav = () => {
  const navigate = useNavigate();
  const navData = [
    { icon: <FaHome />, text: "Home", path: "/" },
    { icon: <MdOutlineFastfood />, text: "Menu", path: "/menu" },
    { icon: <MdLiquor />, text: "Beverages", path: "/beverages" },
    { icon: <LuNotebookTabs />, text: "About Us", path: "/about" },
    { icon: <MdOutlineContactPage />, text: "Contact", path: "/contact" },
    {icon: <MdLiquor/> ,text:"Cart", path:"/cart" }
  ];

  const address = Data.restaurant.location;


  return (
    <nav
      className="hidden md:flex items-center justify-around px-8 py-4 shadow-lg"
      style={{
        backgroundColor: "var(--color-cream-white)",
        color: "var(--color-slate-black)",
        fontFamily: "var(--font-secondary)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="logo" className="w-14 h-14 object-contain" />
        <span
          className="text-xl font-bold"
          style={{
            color: "var(--color-burgundy-red)",
            fontFamily: "var(--font-primary)",
          }}
        >
          Gun Shots
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 list-none">
        {navData.map((item, index) => (
          <li
            key={index}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-full transition-all duration-300"
            style={{
              color: "var(--color-slate-black)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-sunset-orange)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-slate-black)")
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.text}</span>
          </li>
        ))}
      </ul>

      {/* Address */}
      <div
        className="text-sm font-medium italic flex items-center"
        style={{ color: "var(--color-chocolate-brown)" }}
      >
        📍 {address}
      </div>
    </nav>
  );
};

export default TopNav;
