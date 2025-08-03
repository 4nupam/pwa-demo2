import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Beverages from "./Pages/Beverages";
import TopNav from "./Component/Navigation/TopNav";
import BottomNav from "./Component/Navigation/BottomNav";
import FloatingCartIndicator from "./Component/FloatingCartIndicator";
import useCartStore from "./Zustand/useCartStore";
import OfflineNotice from "./Component/OfflineNotice";
import swDev from "./swDev.js";
import "./App.css";

import { registerSW } from "virtual:pwa-register";
import { useEffect } from "react";

registerSW({
  onNeedRefresh() {
    console.log("New content available, click to update.");
  },
  onOfflineReady() {
    console.log("App ready to work offline.");
  },
});

function App() {
  const { cart } = useCartStore();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  useEffect(() => {
    swDev();
  }, []);
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-cream-white)] text-[var(--color-slate-black)]">
        <TopNav />
        {/* Offline Notification */}
        <OfflineNotice />
        <main className="flex-grow mb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/beverages" element={<Beverages />} />
          </Routes>
        </main>

        <BottomNav />
        {cartCount > 0 && <FloatingCartIndicator cartCount={cartCount} />}
      </div>
    </Router>
  );
}

export default App;
