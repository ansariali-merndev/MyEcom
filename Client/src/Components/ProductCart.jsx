import { useContext } from "react";
import { image } from "../assets/assets";
import { ShopContext } from "../Context/context";
import { Link } from "react-router-dom";

export const ProductCart = ({ id, title, price, img }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div>
      <img
        className="w-full h-70 hover:scale-110 transition-transform duration-300 cursor-pointer"
        src={image[img]}
        alt="title"
      />
      <div className="my-6 h-35">
        <p>{title}</p>
        <p>{`${currency} ` + price}</p>
        <Link to={`/store/${id}`}>
          <button className="bg-indigo-600 text-white px-2 py-1 cursor-pointer rounded-[5px] mt-2">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
