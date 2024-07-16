const Logo = ({ text, color = false }) => {
  return (
    <>
      <span
        className={`${color && "text-blue-600"} md:text-5xl text-2xl font-bold`}
      >
        {text}
      </span>
    </>
  );
};

export default Logo;
