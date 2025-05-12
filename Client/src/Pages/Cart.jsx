import { useEffect, useState, useMemo } from "react";
import { Title } from "../Components/Title";
import { useContext } from "react";
import { ShopContext } from "../Context/context";
import { image } from "../assets/assets";
import { CartDetail } from "../Components/CartDetail";

export const Cart = () => {
  const { book_data, currency, cartItem, setCartItem } =
    useContext(ShopContext);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("cart")) || [];
    const merged = existingData.map((item) => {
      const fullBook = book_data.find((book) => book.id === item.id);
      return {
        ...fullBook,
        quantity: item.quantity,
      };
    });
    setCartItem(merged);
  }, [book_data]);

  const handleDeleteBtn = (ind) => {
    const updatedCart = cartItem.filter((_, index) => index !== ind);
    setCartItem(updatedCart);

    const localData = updatedCart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    localStorage.setItem("cart", JSON.stringify(localData));
  };

  const handleQuantity = (e, index) => {
    const quantity = parseInt(e.target.value);
    if (quantity < 1 || isNaN(quantity)) return;
    const updatedCart = [...cartItem];
    updatedCart[index].quantity = quantity;
    setCartItem(updatedCart);

    const localData = updatedCart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    localStorage.setItem("cart", JSON.stringify(localData));
  };

  return (
    <>
      <section>
        <div className="text-xl sm:text-3xl">
          <Title text1={"Your"} text2={"Cart"} />
        </div>
        <ul className="grid gap-4 border-b py-4 px-0.5 text-gray-600 border-gray-400 pb-2">
          {cartItem.map((item, index) => (
            <li
              key={index}
              className="grid grid-cols-[3fr_1fr_0.2fr] gap-4 border-t py-2 border-gray-400"
            >
              <div className="flex gap-6 text-gray-400">
                <img
                  className="w-10 h-15 sm:w-20 sm:h-33"
                  src={image[item.coverImage]}
                  alt=""
                />
                <div className="flex flex-col justify-around">
                  <p className="text-xs sm:text-xl md:text-2xl">{item.title}</p>
                  <div className="flex gap-4 text-xs sm:text-base text-gray-600">
                    <p>
                      {`${currency}`}
                      {item.price}
                    </p>
                    <p>Rating: {item.rating}</p>
                  </div>
                </div>
              </div>
              <div className="w-12 grid items-center">
                <input
                  name="quantity"
                  className="w-full outline-none border border-orange-400 py-1 px-2"
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => handleQuantity(e, index)}
                />
              </div>
              <div className="grid items-center">
                <img
                  onClick={() => handleDeleteBtn(index)}
                  className="w-4 cursor-pointer"
                  src={image.dl}
                  alt="delete"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
      {cartItem.length > 0 && <CartDetail />}
    </>
  );
};
