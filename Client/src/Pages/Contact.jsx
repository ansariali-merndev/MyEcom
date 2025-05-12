import { image } from "../assets/assets";
import { Title } from "../Components/Title";

export const Contact = () => {
  return (
    <>
      <div className="text-3xl grid justify-center my-8">
        <Title text1={"Contact"} text2={"us"} />
      </div>
      <section className="flex flex-col sm:flex-row gap-4 sm:justify-center-safe">
        <div className="w-full md:w-120">
          <img className="w-full sm:px-6 sm:py-2" src={image.contact} alt="" />
        </div>
        <div className="flex flex-col text-gray-500 gap-6">
          <h2 className="text-2xl">Our Store</h2>
          <div>
            <p className="text-xs sm:text-base">54709 Willms Station</p>
            <p className="text-xs sm:text-base">Suite 350, Washington, USA</p>
          </div>
          <div>
            <p className="text-xs sm:text-base">Tel: (415) 555-0132</p>
            <p className="text-xs sm:text-base">Email: admin@forever.com</p>
          </div>
          <h2 className="text-2xl">Careers at Forever</h2>
          <div>
            <p className="text-xs sm:text-base">
              Learn more about our teams and job openings.
            </p>
            <button className="bg-black text-white px-4 py-2 hover:bg-indigo-600 cursor-pointer mt-10">
              Explore Jobs
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
