// State
import { useState } from "react";
// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { TfiBackRight } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { IoIosUnlock } from "react-icons/io";
import { FaUser } from "react-icons/fa";
// JS - Cookie
import Cookies from "js-cookie";

// Module
import Input from "components/module/Input";
import Button from "components/module/Button";
import FormLink from "components/module/FormLink";
// Shared
import Logo from "components/shared/Logo";
import Form from "components/module/Form";
// Toast
import toast, { Toaster } from "react-hot-toast";
// Config-Api
import { UserBaseUrl } from "configs/api";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    rolePassword: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    const { email, password, rolePassword } = signInData;
    e.preventDefault();
    if (!email || !password) {
      toast.error("اطلاعات را بدرستی وارد نکرده اید");
      return;
    }
    try {
      const res = await fetch(UserBaseUrl("sign-in"), {
        method: "POST",
        body: JSON.stringify({ email, password, rolePassword }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      const { status, message, token } = json;

      if (status === 400) {
        toast.error(message);
        return;
      } else {
        toast.success(message);
        Cookies.set("accessToken", token);
        location.replace("/dashboard");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <Form onSubmit={submitHandler}>
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
            <div className="flex items-center gap-2">
              <FaUser className="text-xl text-blue-600" />
              <Input
                type="password"
                name="rolePassword"
                placeholder="ADMIN"
                changeHandler={changeHandler}
              />
            </div>
          </div>

          <div className="md:flex-row md:gap-0 flex flex-col gap-6 justify-between items-center w-full">
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
      <Toaster />
    </Form>
  );
};

export default SignIn;
