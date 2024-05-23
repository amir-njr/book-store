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

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
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
  return (
    <Form>
      <div className="flex flex-col gap-6 items-center md:w-fit w-[300px]">
        <Logo text="شهر کتاب" color={true} />
        <div className="border-2 border-blue-600 bg-white rounded flex flex-col gap-10 items-center p-4">
          <h1>ثبت نام</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                name="name"
                placeholder="نام تان را وارد نمایید ..."
                changeHandler={changeHandler}
              />

              <Input
                type="text"
                name="lastName"
                placeholder="نام خانوادگی تان را وارد نمایید ..."
                changeHandler={changeHandler}
              />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="ایمیل را وارد نمایید ..."
              changeHandler={changeHandler}
            />
            <Input
              type="text"
              name="phone"
              placeholder="شماره تلفن تان را وارد نمایید ..."
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
    </Form>
  );
};

export default SignUp;
