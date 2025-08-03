import React, { useState, useEffect } from "react";
import ProductCard from "../Component/Cards/ProductCard";
import { supabase } from "../../lib/supabase";

export default function MenuComp() {
  const [menuData, setMenuData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filters, setFilters] = useState({
    veg: false,
    nonVeg: false,
    spicy: false,
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
  const fetchMenu = async () => {
    if (navigator.onLine) {
      try {
        const { data, error } = await supabase.from("menu").select("*");

        if (error || !data) throw new Error("Supabase fetch failed");

        localStorage.setItem("menuData", JSON.stringify(data));
        setMenuData(data);
        console.log("Fetched from Supabase:", data);
      } catch (err) {
        console.warn("Fetch failed. Falling back to localStorage:", err.message);
        const cachedData = localStorage.getItem("menuData");
        if (cachedData) {
          setMenuData(JSON.parse(cachedData));
        }
      }
    } else {
      // Offline mode
      const cachedData = localStorage.getItem("menuData");
      if (cachedData) {
        setMenuData(JSON.parse(cachedData));
        console.log("Offline: Loaded menu from localStorage.");
      } else {
        console.error("Offline: No cached menu data found.");
      }
    }
  };

  fetchMenu();
}, []);


  const categories = [
    "All",
    ...new Set(menuData.map((section) => section.category)),
  ];

  const toggleFilter = (key) =>
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));

  const filteredMenu = menuData
    .filter(
      (section) =>
        selectedCategory === "All" || section.category === selectedCategory
    )
    .map((section) => ({
      ...section,
      items: section.items?.filter((item) => {
        const matchVeg = filters.veg ? item.veg : true;
        const matchNonVeg = filters.nonVeg ? !item.veg : true;
        const matchSpicy = filters.spicy ? item.spicy_level >= 3 : true;
        const matchSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags?.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          );

        return matchVeg && matchNonVeg && matchSpicy && matchSearch;
      }),
    }))
    .filter((section) => section.items?.length > 0);

  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      {/* Search */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-[#6A1B1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border font-medium transition-all ${
              selectedCategory === category
                ? "bg-[#6A1B1A] text-white border-[#6A1B1A]"
                : "text-[#6A1B1A] border-[#6A1B1A] hover:bg-[#F8F4EC]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-6 justify-center mb-10 flex-wrap text-sm font-medium text-[#6A1B1A]">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.veg}
            onChange={() => toggleFilter("veg")}
          />
          Veg
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.nonVeg}
            onChange={() => toggleFilter("nonVeg")}
          />
          Non-Veg
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.spicy}
            onChange={() => toggleFilter("spicy")}
          />
          Spicy x3+
        </label>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMenu.map((section) =>
          section.items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        )}
      </div>

      {/* No Results */}
      {filteredMenu.length === 0 && (
        <p className="text-center text-gray-500 mt-16 text-lg">
          No items match the selected filters or search query.
        </p>
      )}
    </div>
  );
}
