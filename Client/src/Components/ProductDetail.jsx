import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/context";
import { image } from "../assets/assets";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  const { id } = useParams();
  const { book_data, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(book_data.find((item) => item.id === id));
  }, [id]);

  const handleAddCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex === -1) {
      existingCart.push({
        id,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(existingCart));
      toast.success("Product has been added to your cart!");
    } else {
      existingCart[existingProductIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(existingCart));
      toast.success("Product quantity has been increased!");
    }
  };

  if (product === null) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  } else {
    return (
      <>
        <section className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-0 sm:gap-16 sm:my-12">
          <div className="sm:w-[30vw] lg:w-[30vw] sm:ml-10">
            <img
              className="w-full overflow-hidden"
              src={image[product.coverImage]}
              alt=""
            />
          </div>
          <div className="text-xs sm:text-base flex flex-col gap-1">
            <h1 className="font-semibold sm:text-4xl text-gray-400">
              {product.title}
            </h1>
            <div className="flex gap-2 my-4 sm:my-4">
              <img className="w-3" src={image.star} alt="" />
              <img className="w-3" src={image.star} alt="" />
              <img className="w-3" src={image.star} alt="" />
              <img className="w-3" src={image.star} alt="" />
              <img className="w-3" src={image.dull} alt="" />
            </div>
            <p className="text-gray-600 sm:text-[16px]">
              Author:{" "}
              <span className="text-gray-600 font-medium">
                {product.author}
              </span>
            </p>
            <p className="text-gray-600 sm:text-[16px]">
              Description:{" "}
              <span className="text-gray-600 font-medium">
                {product.description}
              </span>
            </p>
            <p className="text-gray-600 sm:text-[16px]">
              Genre:{" "}
              <span className="text-gray-600 font-medium">{product.genre}</span>
            </p>
            <p className="text-gray-600 sm:text-[16px]">
              Price:
              <span className="text-gray-600 font-medium">
                {` ${currency}`}
                {product.price}
              </span>
            </p>
            <p className="text-gray-600 sm:text-[16px]">
              Rating:{" "}
              <span className="text-gray-600 font-medium">
                {product.rating}
              </span>
            </p>
            <div>
              <button
                onClick={handleAddCart}
                className="bg-indigo-600 text-white px-4 py-2 rounded-[5px] text-xs sm:text-[14px] my-6 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
            <p className="text-gray-600">
              Cash on delivery is available on this product.
            </p>
            <p className="text-gray-600">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </section>
        <div className="border mt-6 sm:mt-2 border-gray-400 text-gray-600">
          <div className="flex">
            <p className="border-b border-r border-gray-400 py-1 px-2 font-semibold text-black">
              Description
            </p>
            <p className="border-b border-r border-gray-400 py-1 px-2">
              Reviews
            </p>
          </div>
          <div className="text-xs sm:text-[14px] grid gap-2 py-4 px-4">
            <p>
              Book Bazar is an online platform dedicated to the buying and
              selling of books. Serving as a virtual marketplace, Book Bazar
              allows book lovers, authors, and publishers to connect in a
              seamless and convenient manner. With a vast collection of books
              across various genres, readers can easily browse, discover, and
              purchase their favorite titles, all from the comfort of their
              homes. Each book listed on the website comes with detailed
              descriptions, author information, pricing, and images, making it
              easier for customers to make informed decisions.
            </p>
            <p>
              Book Bazar ensures a smooth shopping experience with secure
              payment options, timely delivery, and a wide range of books, from
              bestsellers to rare editions. Whether you're an avid reader, a
              student, or someone looking for the perfect gift, Book Bazar
              offers something for everyone, accessible anytime and from
              anywhere in the world. This description captures the essence of
              your e-commerce platform and can be used for your website. Let me
              know if you'd like any adjustments!
            </p>
          </div>
        </div>
      </>
    );
  }
};
