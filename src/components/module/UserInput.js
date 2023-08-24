const UserInput = ({ onChange, placeholder, type , value }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="border-r-4 border-r-blue-600 w-full focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
    />
  );
};

export default UserInput;
