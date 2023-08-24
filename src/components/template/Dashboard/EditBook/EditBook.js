"use client";

import { useEffect, useState } from "react";

import { Toaster, toast } from "react-hot-toast";
import Form from "@/components/module/Form";
import BookInput from "@/components/module/BookInput";
import BreadCrumb from "@/components/module/BreadCrumb";
import Radio from "@/components/module/Radio";
import { useParams } from "next/navigation";

function EditBook() {
  const { editId } = useParams();

  const [bookData, setBookData] = useState({
    name: "",
    lastName: "",
    email: "",
    nationalCode: "",
    phone: "",
  });

  const editHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/books/edit/${editId}`, {
      method: "PATCH",
      body: JSON.stringify(bookData),
      headers: { "Content-Type": "application/json" },
    });
    const response = await res.json();
    if (response.error) {
      toast.error(response.error);
    } else {
      toast.success(response.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <BreadCrumb title={["داشبورد", "ویرایش کتاب"]} />

      <Form text=" ویرایش کتاب">
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
          onClick={(e) => editHandler(e)}
          className="bg-blue-600 text-white rounded px-2 py-1 mt-4 hover:bg-blue-700"
        >
          ویرایش کتاب
        </button>
      </Form>
      <Toaster />
    </div>
  );
}

export default EditBook;
