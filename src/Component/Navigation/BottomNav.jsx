import React from "react";
import { FaHome } from "react-icons/fa";
import {
  MdOutlineFastfood,
  MdLiquor,
  MdOutlineContactPage,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Data from "../Datastore.json";

export default function BottomNav() {
  const navigate = useNavigate();

  const navData = [
    { icon: <FaHome />, text: "Home", path: "/" },
    { icon: <MdOutlineFastfood />, text: "Menu", path: "/menu" },
    { icon: null, text: "Logo", path: "/about", isLogo: true },
    { icon: <MdLiquor />, text: "Beverages", path: "/beverages" },
    { icon: <MdOutlineContactPage />, text: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 md:hidden flex items-center justify-between  py-2 shadow-inner"
      style={{
        backgroundColor: "var(--color-cream-white)",
        color: "var(--color-slate-black)",
        fontFamily: "var(--font-secondary)",
        zIndex: 50,
      }}
    >
      {navData.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          className={`flex  flex-col items-center justify-center text-xs cursor-pointer w-1/5 py-1 transition-all duration-300 ${
            item.isLogo
              ? "translate-y-[-15px] bg-white/10 rounded-full shadow-md "
              : "hover:text-[var(--color-sunset-orange)]"
          }`}
        >
          {item.isLogo ? (
            <img
              src="/logo.png"
              alt="logo"
              className="w-10 h-10 object-contain "
            />
          ) : (
            <>
              <div className="text-lg">{item.icon}</div>
              <span className="text-[10px]">{item.text}</span>
            </>
          )}
        </div>
      ))}
    </nav>
  );
}
