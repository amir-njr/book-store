// State
import { useState } from "react";
// Atom
import { Setting } from "utils/atom";
import { useAtom } from "jotai";
// Context
import { useCart } from "context/CartContext";
// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { LuClock4 } from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GiSwipeCard } from "react-icons/gi";
// Toast
import toast, { Toaster } from "react-hot-toast";

// Module
import PaymentInput from "components/module/PaymentInput";
import Modal from "components/module/Modal";
import Timer from "components/module/Timer";
// Utils
import { sp } from "utils/common";
// Config - Api
import { ShoppingCardBaseUrl } from "configs/api";

const Payment = () => {
  const [state] = useCart();
  const { total, selectedItems, itemsCounter } = state;
  console.log(state, "state");
  console.log(total, "total");
  console.log(selectedItems, "selectedItems");
  console.log(itemsCounter, "itemsCounter");

  const [setting, setSetting] = useAtom(Setting);
  const { modalToggle } = setting;

  const [cardNumber, setCardNumber] = useState("");

  const buyHandler = async () => {
    if (!cardNumber || cardNumber.length !== 16) {
      toast.error("شماره کارت را اشتباه وارد کرده اید ...");
      return;
    }

    try {
      const res = await fetch(ShoppingCardBaseUrl("is-card"), {
        method: "POST",
        body: JSON.stringify({ cardNumber }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();

      if (json.status === 404) {
        setSetting({ ...setting, modalToggle: true });
      } else toast.success("خرید با موفقیت انجام شد ...");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="flex items-center gap-2 bg-blue-600 px-10 py-2 text-white">
        <span>
          <GiSwipeCard className="text-xl" />
        </span>
        <h1>اطلاعات کارت</h1>
      </div>
      <div className="flex justify-center items-center gap-20 h-full px-10">
        <div className="basis-8/12 flex flex-col gap-4">
          <div className="flex gap-[50px]">
            <label className="w-28">شماره کارت</label>
            <input
              className="rounded border px-2 py-1 w-full focus:outline-none"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <PaymentInput text="رمز دوم" />
          <PaymentInput text="CVV2" />

          <PaymentInput text="تاریخ انقضاء" type="expiration" />

          <PaymentInput text="کد امنیتی" />
          <PaymentInput text="ایمیل(اختیاری)" />
          <div className="flex justify-around mt-10">
            <button
              onClick={buyHandler}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-white"
            >
              پرداخت
            </button>
            <Link
              className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white"
              to="/cart"
            >
              انصراف
            </Link>
          </div>
        </div>

        <div className="basis-4/12 flex flex-col gap-8">
          <div className="bg-green-600 p-4 rounded-t text-white text-center">
            <span>اطلاعات پذیرنده</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <LuClock4 className="text-xl" />
              <span>زمان باقی مانده:</span>
            </div>
            <span>
              <Timer min={15} sec={60} />
            </span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-xl" />
              <span>مبلغ قابل پرداخت:</span>
            </div>
            <span>{sp(total)}</span>
          </div>
        </div>
      </div>
      {modalToggle ? <Modal /> : null}
      <Toaster />
    </div>
  );
};

export default Payment;
