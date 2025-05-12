import { image } from "../assets/assets";
import { Title } from "./Title";

export const Policy = () => {
  return (
    <>
      <div className=" flex justify-center text-3xl my-10">
        <Title text1={"our"} text2={"policy"} />
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-2 justify-around">
        <div className="flex flex-col gap-2 items-center ">
          <img className="w-14 sm:w-20" src={image.exchange} alt="exchange" />
          <div className="text-center">
            <p className="text-gray-600">Easy Exchange Policy</p>
            <p className="text-gray-400">
              We offer hassle free exchange policy
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <img className="w-14 sm:w-20" src={image.rt} alt="return" />
          <div className="text-center">
            <p className="text-gray-600">7 Days Return Policy</p>
            <p className="text-gray-400">
              We provide 7 days free return policy
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <img className="w-14 sm:w-20" src={image.support} alt="support" />
          <div className="text-center">
            <p className="text-gray-600">Best customer support</p>
            <p className="text-gray-400">we provide 24/7 customer support</p>
          </div>
        </div>
      </div>
    </>
  );
};
