// Hook
import { useState } from "react";
// Toast
import toast, { Toaster } from "react-hot-toast";

// Config - Api
import { BookBaseUrl } from "configs/api";
// Module
import Form from "./Form";
// Utils
import { sp } from "utils/common";

const DashBookCard = ({ title, price, id, createdAt }) => {
  const [dropDown, setDropdown] = useState(false);
  const deleteHandler = async () => {
    const res = await fetch(BookBaseUrl(`delete-book/${id}`), {
      method: "DELETE",
    });
    const json = await res.json();
    toast.success(json.message);
  };

  const [editBook, setEditBook] = useState({
    title: "",
    price: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    const { title, price } = editBook;
    e.preventDefault();
    if (!title || !price) {
      toast.error("اطلاعات را بدرستی وارد نکرده اید");
      return;
    }
    try {
      const res = await fetch(BookBaseUrl(`update-book/${id}`), {
        method: "PATCH",
        body: JSON.stringify({ title, price }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();

      toast.success(json.message);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <table className="w-full bg-white rounded-b-xl shadow-xl relative">
      <thead>
        <tr className="flex bg-slate-500">
          <th className="basis-2/12">نام کتاب</th>
          <th className="basis-2/12">قیمت</th>
          <th className="basis-2/12">تاریخ ایجاد</th>
          <th className="basise-2/12"></th>
          <th className="basise-2/12"></th>
          <th className="basise-2/12"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="flex p-2">
          <td className="basis-2/12 text-center">{title}</td>
          <td className="basis-2/12 text-center">{sp(price)}</td>
          <td className="basis-2/12 text-center">
            {new Date(createdAt).toLocaleDateString("fa-IR")}
          </td>
          <td className="basis-2/12 text-center"></td>
          <td className="basis-2/12 text-center"></td>
          <td className="basis-2/12 flex justify-center gap-4">
            <button
              onClick={deleteHandler}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-800"
            >
              حذف
            </button>
            <button
              onClick={() => setDropdown(!dropDown)}
              className="px-3 py-1 bg-lime-600 text-white rounded hover:bg-lime-800"
            >
              ویرایش
            </button>
          </td>
        </tr>
      </tbody>
      <Toaster />

      <div
        className={`${
          dropDown ? "h-40 p-4" : "h-0 p-0"
        } bg-blue-200 w-full absolute transition-all z-10 overflow-hidden`}
      >
        <Form onSubmit={submitHandler}>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <label htmlFor="title">
                نام کتاب : <span className="text-red-600">*</span>
              </label>
              <input
                name="title"
                onChange={changeHandler}
                id="tilte"
                className="focus:outline-none px-2 py-1 rounded"
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
                className="focus:outline-none px-2 py-1 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">توضیح :</label>
              <input
                name="description"
                onChange={changeHandler}
                id="description"
                className="focus:outline-none px-2 py-1 rounded"
              />
            </div>
          </div>
          <button className="px-3 py-1 bg-lime-600 text-white rounded hover:bg-lime-800 mt-10">
            ارسال
          </button>
        </Form>
      </div>
    </table>
  );
};

export default DashBookCard;
