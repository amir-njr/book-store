const Middle = ({ qty }) => {
  return (
    <div className="flex items-center justify-center basis-1/12">
      <span className="rounded-md text-center leading-10  h-10 w-10 font-bold text-white bg-orange-500">
        {qty}
      </span>
    </div>
  );
};

export default Middle;
