const Count = ({ length, address }) => {
  return (
    <div className="flex justify-between">
      {address}
      <span>تعداد: {length}</span>
    </div>
  );
};

export default Count;
