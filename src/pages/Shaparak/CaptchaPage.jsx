// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { AiOutlineScan } from "react-icons/ai";

const CaptchaPage = ({ setStep }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <span className="text-white">ثبت کارت</span>
      <AiOutlineScan className="text-8xl text-blue-600" />
      <span className="text-white">لطفا متن داخل تصویر را وارد نمایید.</span>
      <div className="w-full flex justify-between">
        <button
          onClick={() =>
            setStep((prevState) => ({ ...prevState, step: prevState + 1 }))
          }
          className="bg-blue-600 text-white rounded-xl px-6 py-2 hover:bg-blue-700"
        >
          ادامه
        </button>
        <Link to="/payment" className="border-2 border-blue-600 text-blue-600 rounded-xl px-6 py-2 hover:bg-blue-600 hover:text-white">
          انصراف
        </Link>
      </div>
    </div>
  );
};

export default CaptchaPage;
