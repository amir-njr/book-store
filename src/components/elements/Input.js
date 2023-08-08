const Input = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
