const Logo = ({ text, color = false }) => {
  return (
    <h1 className={`${color && "text-blue-600"} md:text-5xl text-2xl font-bold`}>{text}</h1>
  );
};

export default Logo;
