const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-lime-600 text-white px-2 py-1 rounded hover:bg-lime-700"
    >
      {text}
    </button>
  );
};

export default Button;
