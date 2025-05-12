export const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-4 items-center mt-26 mb-12">
      <div className="text-center">
        <h2 className="text-base sm:text-2xl text-gray-600">
          Subscribe now & get 20% off
        </h2>
        <p className="text-xs sm:text-base text-gray-400">
          Join the BookBazar family and never miss a deal on your favorite
          books.
        </p>
      </div>
      <div className="border border-gray-600">
        <input
          type="text"
          className="bg-slate-200 py-2 px-4 outline-none"
          placeholder="Enter Your Email"
          name="subscribe"
        />
        <span className="bg-black py-2.5 px-4 text-white cursor-pointer">
          SUBSCRIBE
        </span>
      </div>
    </div>
  );
};
