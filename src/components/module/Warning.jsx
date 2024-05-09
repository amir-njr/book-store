const Warning = ({ text }) => {
  return (
    <div className="w-full p-2 rounded border-2 border-red-700 bg-red-200 text-red-700">
      {text}
    </div>
  );
};

export default Warning;
