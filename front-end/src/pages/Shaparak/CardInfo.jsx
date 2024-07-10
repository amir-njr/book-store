// State
import { useState } from "react";
// Atom
import { useAtom } from "jotai";
import { Setting } from "utils/atom";

// React-Icon
import { GiSwipeCard } from "react-icons/gi";
// React-Router-Dom
import { Link, useNavigate } from "react-router-dom";
// Config -Api
import { ShoppingCardBaseUrl } from "configs/api";
// Toast
import toast, { Toaster } from "react-hot-toast";

const CardInfo = () => {
  const navigate = useNavigate();
  const [setting, setSetting] = useAtom(Setting);
  const [cardNumber, setCardNumber] = useState("");

  const cardHandler = async () => {
    if (!cardNumber || cardNumber.length !== 16) {
      toast.error("شماره کارت را اشتباه وارد کرده اید ...");
      return;
    }
    try {
      const res = await fetch(ShoppingCardBaseUrl("create"), {
        method: "POST",
        body: JSON.stringify({ cardNumber }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (json.status === 200) {
        navigate("/payment");
        setSetting({ ...setting, modalToggle: false });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 text-white">
      <span className="text-white">ثبت کارت</span>
      <GiSwipeCard className="text-8xl text-blue-600" />
      <span className="text-white">اطلاعات کارت خود را وارد کنید.</span>
      <div className="flex flex-col gap-1">
        <label>شماره کارت</label>
        <input
          onChange={(e) => setCardNumber(e.target.value)}
          className="bg-[#003957] focus:outline-none rounded-xl px-4 py-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Cvv2</label>
        <input className="bg-[#003957] focus:outline-none rounded-xl px-4 py-2" />
      </div>
      <div className="flex flex-col gap-1">
        <label>تاریخ انقضاء</label>
        <div className="flex gap-6 items-center">
          <input className="bg-[#003957] focus:outline-none w-32 rounded-xl px-4 py-2" />
          <span>/</span>
          <input className="bg-[#003957] focus:outline-none w-32 rounded-xl px-4 py-2" />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={cardHandler}
          className="bg-blue-600 rounded-xl px-6 py-2 hover:bg-blue-700"
        >
          ادامه
        </button>
        <Link
          to="/payment"
          className="border-2 border-blue-600 text-blue-600 rounded-xl px-6 py-2 hover:bg-blue-600 hover:text-white"
        >
          انصراف
        </Link>
      </div>
      <Toaster />
    </div>
  );
};

export default CardInfo;
