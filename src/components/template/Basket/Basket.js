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
    <div className="flex my-10 md:px-0 px-4 gap-10 min-h-screen">
      {card.selectedItems.length ? (
        <div className="border-2 bg-white fixed xl:left-10 xl:right-auto md:top-40 top-56 xl:flex xl:flex-col flex items-center justify-around px-2 gap-8 border-purple-500 rounded xl:h-[350px] h-20 xl:w-auto md:w-[650px] w-[300px] left-5">
          <div className="flex justify-end xl:w-full xl:flex xl:justify-between">
            <span className="text-blue-600 md:block hidden">کل محصولات:</span>
            <span title="تعداد محصول">{card.itemCounter}</span>
          </div>
          <div className="flex justify-end xl:w-full xl:flex xl:justify-between">
            <span className="text-blue-600 md:block hidden">قیمت کل:</span>
            <span title="قیمت">{sp(card.totalPrice)}</span>
          </div>
          <div className="flex justify-between">
            <Link
              className="flex justify-center items-center gap-2 px-3  py-2 rounded w-full hover:bg-lime-500 border border-lime-500"
              href=""
            >
              <BsFillCreditCard2BackFill className="text-xl" />
              <span className="md:block hidden">پرداخت</span>
            </Link>
          </div>
          <button
            onClick={() => dispatch(clean())}
            className="flex justify-center items-center gap-2 border px-3 py-2 rounded border-red-500 hover:bg-red-500"
          >
            <PiBroomFill className="text-xl" />
            <span className="md:block hidden"> خالی کردن سبد</span>
          </button>
        </div>
      ) : null}

      <div className="flex flex-col gap-4 md:basis-10/12 w-full xl:mt-0 md:mt-20 mt-14">
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
