"use client";

import BreadCrumb from "@/components/module/BreadCrumb";
import Form from "@/components/module/Form";
import Radio from "@/components/module/Radio";
import BookInput from "@/components/module/BookInput";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const postHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(bookData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res?.json();

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
  };
  return (
    <div className="flex flex-col">
      <BreadCrumb title={["داشبورد", "ایجاد کتاب"]} />

      <Form text="اضافه کردن کتاب">
        <BookInput
          bookData={bookData}
          setBookData={setBookData}
          name="title"
          placeholder="نام کتاب را وارد نمایید ..."
        />
        <BookInput
          bookData={bookData}
          setBookData={setBookData}
          name="description"
          textarea={true}
          placeholder="توضیحی درباره کتاب وارد نمایید ... (اختیاری)"
        />
        <BookInput
          bookData={bookData}
          setBookData={setBookData}
          name="price"
          placeholder="قیمت کتاب را وارد نمایید ... (تومان)"
        />

        <Radio bookData={bookData} setBookData={setBookData} />
        <button
          onClick={(e) => postHandler(e)}
          className="bg-blue-600 text-white rounded px-2 py-1 mt-4 hover:bg-blue-700"
        >
          ثبت کتاب
        </button>
      </Form>
      <Toaster />
    </div>
  );
};

export default AddBook;
