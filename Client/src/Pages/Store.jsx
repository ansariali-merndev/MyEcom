import { useContext, useEffect, useState } from "react";
import { ProductCart } from "../Components/ProductCart";
import { ShopContext } from "../Context/context";
import { Search } from "../Components/Search";
import { Title } from "../Components/Title";

export const Store = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { book_data } = useContext(ShopContext);
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    setData(book_data);
    const uniqueGenres = [...new Set(book_data.map((book) => book.genre))];
    setCategory(uniqueGenres);
  }, [book_data]);

  useEffect(() => {
    let filteredData = book_data;
    if (selectedCategory !== "") {
      filteredData = filteredData.filter(
        (item) => item.genre === selectedCategory
      );
    }
    if (userSearch.trim() !== "") {
      filteredData = filteredData.filter(
        (item) =>
          item.title.toLowerCase().includes(userSearch.toLowerCase()) ||
          item.author.toLowerCase().includes(userSearch.toLowerCase()) ||
          item.description.toLowerCase().includes(userSearch.toLowerCase())
      );
    }
    setData(filteredData);
  }, [selectedCategory, userSearch]);

  return (
    <section>
      <Search userSearch={userSearch} setUserSearch={setUserSearch} />
      <div className="grid grid-cols-[1fr_0.2fr] pt-4 pb-10">
        <div className="text-xl sm:text-3xl">
          <Title text1={"All"} text2={"Books"} />
        </div>
        <div className="min-w-40 grid items-center ">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full cursor-pointer"
          >
            <option value="">All Category</option>
            {category.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.map((item, index) => (
          <ProductCart
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.coverImage}
          />
        ))}
      </div>
    </section>
  );
};
