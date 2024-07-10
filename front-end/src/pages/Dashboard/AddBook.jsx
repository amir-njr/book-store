// Hook
import { useState } from "react";
// Toaster
import toast, { Toaster } from "react-hot-toast";

// Module
import Form from "components/module/Form";
import BreadCrumb from "components/module/BreadCrumb";
// Config - Api
import { BookBaseUrl } from "configs/api";

const AddBook = () => {
  const [addBook, setAddBook] = useState({
    title: "",
    price: "",
    discount: "",
    description: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    const { title, price, discount, description } = addBook;
    e.preventDefault();
    if (!title || !price || !description) {
      toast.error("اطلاعات را بدرستی وارد نکرده اید");
      return;
    }
    try {
      const res = await fetch(BookBaseUrl("create-book"), {
        method: "POST",
        body: JSON.stringify({ title, price, discount, description }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();

      toast.success(json.message);
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div>
      <BreadCrumb title={["داشبورد", "ایجاد کتاب"]} />

      <Form onSubmit={submitHandler}>
        <div className="flex flex-col gap-6 w-[50%]">
          <div className="flex flex-col">
            <label htmlFor="title">
              نام کتاب : <span className="text-red-600">*</span>
            </label>
            <input
              name="title"
              onChange={changeHandler}
              id="title"
              className="focus:outline-none p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">
              قیمت : <span className="text-red-600">*</span>
            </label>
            <input
              name="price"
              onChange={changeHandler}
              id="price"
              className="focus:outline-none p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="discount">تخفیف :</label>
            <input
              placeholder="%"
              name="discount"
              onChange={changeHandler}
              id="discount"
              className="focus:outline-none p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">
              توضیحات : <span className="text-red-600">*</span>
            </label>
            <textarea
              rows={6}
              name="description"
              onChange={changeHandler}
              id="description"
              className="focus:outline-none p-2 rounded resize-none"
            ></textarea>
          </div>
        </div>
        <button className="px-3 py-1 bg-lime-600 text-white rounded hover:bg-lime-800 mt-10">
          ارسال
        </button>
      </Form>
      <Toaster />
    </div>
  );
};

export default AddBook;
