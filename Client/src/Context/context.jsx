import { createContext, useState } from "react";
import { book_data } from "../assets/assets";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const currency = "₹";
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const value = {
    book_data,
    currency,
    showSearch,
    setShowSearch,
    cartItem,
    setCartItem,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
