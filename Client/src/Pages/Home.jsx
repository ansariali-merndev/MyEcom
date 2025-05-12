import { Hero } from "../Components/Hero";
import { Latest } from "../Components/Latest";
import { NewsLetter } from "../Components/NewsLetter";
import { Policy } from "../Components/Policy";

export const Home = () => {
  return (
    <>
      <Hero />
      <Latest />
      <Policy />
      <NewsLetter />
    </>
  );
};
