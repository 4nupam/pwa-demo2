import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function FloatingCartIndicator({ cartCount }) {
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-44 right-4 z-50 bg-[var(--color-burgundy-red)] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105 transition"
      onClick={() => navigate("/cart")}
    >
      <FaShoppingCart />
      <span>{cartCount}</span>
    </div>
  );
}
