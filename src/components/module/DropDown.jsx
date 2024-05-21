const DropDown = ({ children, dropdown }) => {
  return (
    <div
      className={`${
        dropdown ? "h-38 p-4" : "h-0"
      } flex flex-col gap-4 absolute top-10 bg-blue-700 w-40  rounded-b-md shadow-2xl transition-all overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default DropDown;
