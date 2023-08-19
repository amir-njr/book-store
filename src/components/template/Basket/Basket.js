"use client";

// Link
import Link from "next/link";
// Selector
import { useDispatch, useSelector } from "react-redux";
// React-Icon
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { PiBroomFill } from "react-icons/pi";

// Actions
import { clean } from "@/redux/features/carditems/cardSlice";
// Common
import { sp } from "@/utils/common";
// Components
import BasketCard from "@/components/module/BasketCard.js/BasketCard";
import Warning from "@/components/module/Warning";

const Basket = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);

  return (
    <div className="flex my-10 gap-10 min-h-screen">
      <div className="border-2 fixed left-10 flex flex-col justify-center px-5 gap-8 border-purple-500 rounded h-[350px]">
        <div className="flex justify-between">
          <span className="text-blue-600">کل محصولات:</span>
          <span>{card.itemCounter}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-blue-600">قیمت کل:</span>
          <span>{sp(card.totalPrice)}</span>
        </div>
        <div className="flex justify-between">
          <Link
            className="flex justify-center items-center gap-2 px-3 py-2 rounded w-full hover:bg-lime-500 border border-lime-500"
            href=""
          >
            <BsFillCreditCard2BackFill className="text-xl" />
            <span>پرداخت</span>
          </Link>
        </div>
        <button
          onClick={() => dispatch(clean())}
          className="flex justify-center items-center gap-2 border px-3 py-2 rounded border-red-500 hover:bg-red-500"
        >
          <PiBroomFill className="text-xl" />
          <span> خالی کردن سبد</span>
        </button>
      </div>
      <div className="basis-10/12 flex flex-col gap-4">
        {!card.selectedItems.length && (
          <Warning text="هنوز محصولی را به سبد خرید اضافه نکردید." />
        )}
        {card.selectedItems.map((item) => (
          <BasketCard key={item._id} selected={item} />
        ))}
      </div>
    </div>
  );
};

export default Basket;
