import { useContext, useMemo } from "react";
import { Title } from "./Title";
import { ShopContext } from "../Context/context";
import { Link } from "react-router-dom";

export const CartDetail = () => {
  const { currency, book_data, cartItem } = useContext(ShopContext);
  const shippingFee = 300;

  const subtotal = useMemo(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach((element) => {
      const book = book_data.find((b) => b.id === element.id);
      if (book) {
        total += book.price * element.quantity;
      }
    });
    return total;
  }, [book_data, cartItem]);

  return (
    <div className="grid sm:justify-end">
      <div className="w-100 my-8 sm:text-2xl px-2 py-1">
        <Title text1={"cart"} text2={"totals"} />
        <div className="text-xs grid gap-2">
          <div className="flex justify-between border-b py-4 px-0.5 border-gray-600 text-gray-600">
            <span>Subtotal</span>
            <span>{`${currency} ${subtotal}`}</span>
          </div>
          <div className="flex justify-between border-b py-4 px-0.5 border-gray-600 text-gray-600">
            <span>Shipping Fee</span>
            <span>{`${currency} ${shippingFee}`}</span>
          </div>
          <div className="flex justify-between border-b py-4 px-0.5 border-gray-600 text-gray-600">
            <span>Total</span>
            <span>{`${currency} ${subtotal + shippingFee}`}</span>
          </div>
        </div>
      </div>
      <Link to="/place-order">
        <button className="bg-black text-white w-60 py-2 px-4 cursor-pointer">
          PROCEED TO CHECKOUT
        </button>
      </Link>
    </div>
  );
};
