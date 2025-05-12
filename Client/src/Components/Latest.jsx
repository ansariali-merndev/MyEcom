import { useContext, useEffect, useState } from "react";
import { Title } from "./Title";
import { ShopContext } from "../Context/context";
import { ProductCart } from "../Components/ProductCart";

export const Latest = () => {
  const [latestProduct, setLatestProduct] = useState([]);
  const { book_data } = useContext(ShopContext);

  useEffect(() => {
    setLatestProduct(book_data.slice(0, 5));
  }, []);

  return (
    <div>
      <div className=" flex justify-center text-3xl my-10">
        <Title text1={"Latest"} text2={"Arrivals"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {latestProduct.map((item, index) => (
          <ProductCart
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.coverImage}
          />
        ))}
      </div>
    </div>
  );
};
