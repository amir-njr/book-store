"use client";

const Form = ({ children }) => {
  return (
    <form className="flex flex-col gap-5 mt-4">
      <p className="text-blue-800 font-bold text-xl">تکمیل اطلاعات کتاب</p>
      {children}
    </form>
  );
};

export default Form;
