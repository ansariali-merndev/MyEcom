import { Title } from "../Components/Title";
import { image } from "../assets/assets";
import { NewsLetter } from "../Components/NewsLetter";

export const About = () => {
  return (
    <section>
      <div className="grid sm:grid-cols-2">
        <div className="px-2 pt-18">
          <img className="w-full" src={image.about} alt="about" />
        </div>
        <div>
          <div className="grid justify-center text-2xl">
            <Title text1={"About"} text2={"Page"} />
          </div>
          <div className="px-4 grid gap-2 text-xs md:text-base text-gray-600">
            <p>
              Book Bazar was born from a shared passion for storytelling and a
              vision to make reading more accessible, exciting, and convenient
              for everyone. In a world increasingly driven by screens and
              scrolling, we wanted to create a digital space where readers could
              slow down, explore the beauty of books, and rediscover the joy of
              reading. Whether you're a lifelong bibliophile or someone just
              beginning their literary journey, Book Bazar is your companion in
              discovering stories that inspire, inform, and entertain.
            </p>
            <p>
              We believe that every book has the power to change lives, and
              every reader deserves access to those stories. That’s why we’ve
              designed our website to be as user-friendly and intuitive as
              possible, allowing you to browse collections, read detailed
              descriptions, check reviews, and make purchases with ease. Whether
              you’re shopping from your phone or your desktop, we’ve ensured the
              experience is fast, secure, and satisfying.
            </p>
            <p>
              Our mission goes beyond selling books. We aim to build a movement
              where reading becomes a daily habit, a personal escape, and a
              powerful tool for growth. In every package we deliver, in every
              recommendation we share, and in every story we bring to life, we
              carry our commitment to quality, trust, and passion for reading.
            </p>
          </div>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </section>
  );
};
