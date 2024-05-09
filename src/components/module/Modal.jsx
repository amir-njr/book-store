// Atom
import { useAtom } from "jotai";
import { Setting } from "utils/atom";
// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { CiWarning } from "react-icons/ci";

const Modal = () => {
  const [setting, setSetting] = useAtom(Setting);

  return (
    <div className="w-full h-full fixed top-0 right-0 flex justify-center items-center backdrop-blur-sm bg-gray-600/50">
      <div className="bg-white rounded w-[500px] flex flex-col items-center gap-8 relative">
        <span className="absolute rounded-full bg-red-600 text-white p-3 top-[-45px]">
          <CiWarning className="text-6xl" />
        </span>
        <span className="text-red-600 mt-16">خطا</span>
        <p className="px-8 text-justify">
          با توجه به قانون جدید بانک مرکزی، بانک شما به سامانه هاب شاپرک اضافه
          گردیده است. لازم است ابتدا، اطلاعات کارت خود را در این سامانه ثبت
          کنید. بعد از ثبت می توانید به برنامه باز گردید و تراکنش را ادامه دهید.
        </p>
        <div className="flex justify-between w-full">
          <Link
            className="basis-6/12 text-center bg-blue-600 text-white p-4 hover:bg-blue-700"
            to="/shaparak"
          >
            ثبت کارت
          </Link>
          <button
            onClick={() => setSetting({ ...setting, modalToggle: false })}
            className="basis-6/12 text-center bg-gray-200 p-4 hover:bg-gray-300"
          >
            بعدا
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
