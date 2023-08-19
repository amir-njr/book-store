"use client";

// Link
import Link from "next/link";

// Dispatch
import { useDispatch, useSelector } from "react-redux";
// Actions
import {
  increment,
  decrement,
  add,
  remove,
} from "@/redux/features/carditems/cardSlice";
// React-Icons
import { BsTrash3Fill } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";

// Common
import { isDataInArray, qountityCount, sp } from "@/utils/common";
// Icon
import Dollar from "../icons/Dollar";
// Module
import Pictures from "./Pictures";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";

const BookCard = ({ data }) => {
  const { title, price, category, _id } = data;

  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);
  const session = useSession();

  const addhandler = () => {
    if (!session.data) {
      toast.error("لطفا وارد حساب کاربری شوید و یا ثبت نام نمایید.");
      return;
    }
    dispatch(add(data));
  };

  return (
    <div className="border rounded p-2 flex flex-col gap-4">
      <Pictures category={category} />

      <h1 className="flex items-center gap-2">
        <MdOutlineDriveFileRenameOutline className="text-2xl" />
        {title}
      </h1>
      <span className="flex items-center gap-2">
        <BiSolidCategoryAlt className="text-2xl" />
        {category === "handout" && "جزوه"}
        {category === "academic" && "علمی"}
        {category === "story" && "داستانی"}
        {category === "novel" && "رمان"}
      </span>
      <span className="flex items-center gap-2">
        <Dollar />
        {`${sp(price)} تومان`}
      </span>
      <div className="flex justify-between">
        <div className="flex">
          {isDataInArray(card, _id) ? (
            <button
              onClick={() => dispatch(increment(data))}
              className="rounded-r-md border-l h-10 w-10 text-white bg-blue-500 hover:bg-blue-600"
            >
              +
            </button>
          ) : (
            <button
              onClick={addhandler}
              className="rounded px-8 py-2 font-bold text-white bg-blue-500 hover:bg-blue-600"
            >
              افزودن
            </button>
          )}

          {qountityCount(card, _id) === 1 && (
            <button
              className="rounded-l-md h-10 w-10 flex justify-center items-center text-white font-bold text-xl bg-red-500 hover:bg-red-600"
              onClick={() => dispatch(remove(data))}
            >
              <BsTrash3Fill />
            </button>
          )}
          {qountityCount(card, _id) > 1 && (
            <button
              className="rounded-l-md h-10 w-10 text-white bg-blue-500 hover:bg-blue-600"
              onClick={() => dispatch(decrement(data))}
            >
              -
            </button>
          )}
        </div>
        <Link
          href={`detail/${_id}`}
          className="text-white flex justify-center items-center font-bold rounded bg-purple-500 hover:bg-purple-600 py-1 px-3"
        >
          جزئیات
        </Link>
      </div>
      <Toaster />
    </div>
  );
};

export default BookCard;
