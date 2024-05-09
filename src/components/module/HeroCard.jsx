const HeroCard = ({ text, icon }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default HeroCard;
