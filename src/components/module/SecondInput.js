"use client";

const SecondInput = ({
  value,
  onChange,
  name,
  placeholder,
  type,
  textarea = false,
  bookData,
  setBookData,
}) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
    console.log(bookData,"ss")
  };
  return (
    <>
      {textarea ? (
        <textarea
          value={bookData[name]}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2 w-[400px]"
          placeholder={placeholder}
          type="text"
          name={name}
          onChange={changeHandler}
        />
      ) : (
        <input
          value={bookData[name]}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2 w-[400px]"
          placeholder={placeholder}
          type="text"
          name={name}
          onChange={changeHandler}
        />
      )}
    </>
  );
};

export default SecondInput;
