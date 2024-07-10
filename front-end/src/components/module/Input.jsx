const Input = ({ name, type, placeholder, changeHandler }) => {
  return (
    <input
      onChange={changeHandler}
      name={name}
      type={type}
      placeholder={placeholder}
      className="border-2 border-blue-600 rounded focus:outline-none p-1 w-full"
    />
  );
};

export default Input;
