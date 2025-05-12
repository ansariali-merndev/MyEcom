import { useContext } from "react";
import { image } from "../assets/assets";
import { ShopContext } from "../Context/context";

export const Search = ({ userSearch, setUserSearch }) => {
  const { showSearch, setShowSearch } = useContext(ShopContext);

  return showSearch ? (
    <div className=" text-center my-6">
      <div className="inline-flex items-center justify-between border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          className="outline-none  w-full bg-inherit"
          type="text"
          placeholder="Search Here..."
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <img className="w-4 mx-2" src={image.search} alt="search" />
      </div>
      <img
        className="inline w-3 cursor-pointer"
        src={image.cross}
        onClick={() => setShowSearch(false)}
        alt="cross"
      />
    </div>
  ) : null;
};
