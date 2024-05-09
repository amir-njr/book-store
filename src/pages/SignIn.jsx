// State
import { useState } from "react";
// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { TfiBackRight } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { IoIosUnlock } from "react-icons/io";

// Module
import Input from "components/module/Input";
import Button from "components/module/Button";
import FormLink from "components/module/FormLink";
// Shared
import Logo from "components/shared/Logo";
import Form from "components/module/Form";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Form>
      <div className="flex flex-col gap-6 items-center">
        <Logo text="شهر کتاب" color={true} />
        <div className="border-2 border-blue-600 bg-white rounded flex flex-col gap-10 items-center p-4">
          <h1>ورود به پنل</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MdEmail className="text-2xl text-blue-600" />
              <Input
                type="email"
                name="email"
                placeholder="ایمیل را وارد نمایید ..."
                changeHandler={changeHandler}
              />
            </div>
            <div className="flex items-center gap-2">
              <IoIosUnlock className="text-2xl text-blue-600" />
              <Input
                type="password"
                name="password"
                placeholder="رمز عبور را وارد نمایید ..."
                changeHandler={changeHandler}
              />
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <Button text="ارسال" />
            <div className="flex items-center gap-2">
              <p className="underline">حسابی ندارید؟</p>
              <FormLink text="ثبت نام" href="/sign-up" />
            </div>
          </div>
        </div>

        <Link
          className="bg-[#222222] p-2 rounded text-white flex gap-2 items-center"
          to="/home"
        >
          بازگشت به صفحه اصلی
          <TfiBackRight className="text-xl" />
        </Link>
      </div>
    </Form>
  );
};

export default SignIn;
