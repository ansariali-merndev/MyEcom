import { image } from "../../assets/assets.js";

export const Footer = () => {
  return (
    <footer className="grid gap-8 md:grid-cols-[1fr_0.5fr_0.5fr] mt-30 mb-8 text-gray-600">
      <div className="flex flex-col px-4 gap-4">
        <img className="w-20 sm:w-30" src={image.logo} alt="" />
        <p className="text-xs sm:text-[14px]">
          Book Bazaar is a trusted platform where you can find the best books
          from every genre. We are proud to be a part of your reading journey.
          Feel free to contact us anytime for support – we’re always here for
          you!
        </p>
      </div>
      <div className="flex flex-col gap-8 py-4 sm:ml-20">
        <p className="uppercase font-semibold urbanist leading-1">Company</p>
        <div className="text-xs sm:text-[14px] flex flex-col sm:gap-0.5">
          <p>Home</p>
          <p>About us</p>
          <p>Delivery</p>
          <p>Privacy policy</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 py-4">
        <p className="uppercase font-semibold urbanist leading-1">
          Get in Touch
        </p>
        <div className="text-xs sm:text-[14px] flex flex-col sm:gap-0.5">
          <p>+91 9990970056</p>
          <p>contact@bookbazaar.com</p>
        </div>
      </div>
      <div className="">
        <p className="text-xs sm:text-base text-indigo-400 font-semibold">
          Copyright 2025@ ansariali.developer - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};
