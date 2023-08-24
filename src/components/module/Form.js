"use client";

const Form = ({ children , text }) => {
  return (
    <form className="flex flex-col gap-5">
      <p className="text-blue-800 font-bold text-xl">{text}</p>
      {children}
    </form>
  );
};

export default Form;
