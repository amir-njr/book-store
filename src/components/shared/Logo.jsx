const Logo = ({ text, color = false }) => {
  return (
    <h1 className={`${color && "text-blue-600"} text-5xl font-bold`}>{text}</h1>
  );
};

export default Logo;
