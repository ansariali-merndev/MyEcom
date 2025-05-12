import { image } from "../assets/assets";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="grid sm:grid-cols-2 border border-gray-400 my-12">
      <div className="grid justify-center items-center h-55 sm:h-full px-4 py-2">
        <div className="px-2">
          <h1 className="text-gray-400 font-medium text-xl sm:text-2xl md:text-4xl mb-2">
            Empower Your Reading
          </h1>
          <p className="text-gray-600 font-medium text-xs sm:text-base">
            Discover premium reads, timeless classics, and must-have
            bestsellers. <br />
            Your next great story begins here.
          </p>
          <Link to="/store">
            <button className="bg-indigo-600 text-xs sm:text-base text-white py-2 px-4 rounded-xl cursor-pointer mt-4">
              Browse Collection →
            </button>
          </Link>
        </div>
      </div>

      <img src={image.hero} className="w-full" alt="hero" />
    </section>
  );
};
