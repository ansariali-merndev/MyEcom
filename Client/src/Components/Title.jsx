export const Title = ({ text1, text2 }) => {
  return (
    <div className="flex gap-2 items-center my-4">
      <p className="uppercase text-gray-600">
        {`${text1} `}
        <span className="font-medium text-gray-600">{text2}</span>
      </p>
      <p className="w-8 sm:w-10 md:w-12 h-[2px] bg-gray-600"></p>
    </div>
  );
};
