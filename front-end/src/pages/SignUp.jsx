// State
import { useState } from "react";
// React-Icon
import { TfiBackRight } from "react-icons/tfi";
// React-Router-Dom
import { Link } from "react-router-dom";

// Module
import Button from "components/module/Button";
import FormLink from "components/module/FormLink";
import Input from "components/module/Input";
// Shared
import Logo from "components/shared/Logo";
import Form from "components/module/Form";
// Toast
import toast, { Toaster } from "react-hot-toast";
// Config-Api
import { UserBaseUrl } from "configs/api";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    const { fullName, email, password, confirmPassword } = signUpData;
    e.preventDefault();
    if ((!fullName || !email || !password)) {
      toast.error("اطلاعات را بدرستی وارد نکرده اید");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("رمز عبور مطابقت ندارد");
      return;
    }
    try {
      const res = await fetch(UserBaseUrl("sign-up"), {
        method: "POST",
        body: JSON.stringify({ fullName, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (json.status === 400) {
        toast.error(json.message);
        return;
      } else {
        toast.success(json.message);
        location.replace("/sign-in")
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <div className="flex flex-col gap-6 items-center md:w-fit w-[300px]">
        <Logo text="شهر کتاب" color={true} />
        <div className="border-2 border-blue-600 bg-white rounded flex flex-col gap-10 items-center p-4">
          <h1>ثبت نام</h1>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="fullName"
              placeholder="نام و نام خانوادگی تان را وارد نمایید ..."
              changeHandler={changeHandler}
            />

            <Input
              type="email"
              name="email"
              placeholder="ایمیل را وارد نمایید ..."
              changeHandler={changeHandler}
            />
            <Input
              type="password"
              name="password"
              placeholder="رمز عبور را وارد نمایید ..."
              changeHandler={changeHandler}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="رمز عبور را تایید نمایید ..."
              changeHandler={changeHandler}
            />
          </div>

          <div className="md:flex-row md:gap-0 flex flex-col gap-6 justify-between items-center w-full">
            <Button text="ارسال" />
            <div className="flex items-center gap-2">
              <p className="underline">حسابی دارید؟</p>
              <FormLink text="ورود" href="/sign-in" />
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

export default SignUp;
