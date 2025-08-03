import { create } from 'zustand';

// Helper to get from localStorage
const getStoredCart = () => {
  try {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const useCartStore = create((set, get) => ({
  cart: getStoredCart(), // Load from localStorage on init

  addToCart: (product) => {
    const { cart } = get();
    const existing = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    set({ cart: updatedCart });
  },

  removeFromCart: (productId) => {
    const { cart } = get();
    const existing = cart.find((item) => item.id === productId);

    let updatedCart;
    if (existing?.quantity > 1) {
      updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      updatedCart = cart.filter((item) => item.id !== productId);
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    set({ cart: updatedCart });
  },

  getQuantity: (productId) => {
    const { cart } = get();
    return cart.find((item) => item.id === productId)?.quantity || 0;
  },

  clearCart: () => {
    localStorage.removeItem('cart');
    set({ cart: [] });
  },
}));

export default useCartStore;
