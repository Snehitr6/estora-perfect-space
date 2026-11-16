
import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("estora-wishlist")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("estora-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const isWishlisted = (id) =>
    wishlist.some((property) => String(property.id) === String(id));

  const toggleWishlist = (property) => {
    setWishlist((current) => {
      const exists = current.some(
        (item) => String(item.id) === String(property.id)
      );

      return exists
        ? current.filter((item) => String(item.id) !== String(property.id))
        : [...current, property];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((current) =>
      current.filter((item) => String(item.id) !== String(id))
    );
  };

  const clearWishlist = () => setWishlist([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isWishlisted,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
}
