const DropDown = ({ children, dropdown, position = false }) => {
  return (
    <div
      className={`${dropdown ? "h-38 p-4" : "h-0"} ${
        position ? " left-0 w-28" : "w-40"
      } flex flex-col gap-4 absolute top-10 bg-blue-700 rounded-b-md shadow-2xl transition-all overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default DropDown;
