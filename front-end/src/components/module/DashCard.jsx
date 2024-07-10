const DashCard = ({ text, icon, statistics, color }) => {
  return (
    <div
      className={`${
        color === "blue"
          ? "bg-blue-400"
          : color === "purple"
          ? "bg-purple-400"
          : color === "green"
          ? "bg-green-400"
          : "bg-orange-400"
      } rounded border flex flex-col gap-3 w-full p-6`}
    >
      <span>{icon}</span>
      <span>{statistics}</span>
      <span>{text}</span>
    </div>
  );
};

export default DashCard;
