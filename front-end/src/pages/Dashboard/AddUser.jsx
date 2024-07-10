// Hook
import { useState } from "react";
// Toaster
import toast, { Toaster } from "react-hot-toast";

// Module
import Form from "components/module/Form";
import BreadCrumb from "components/module/BreadCrumb";
// Config - Api
import { UserBaseUrl } from "configs/api";

const AddUser = () => {
  const [addUser, setAddUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    const { fullName, email, password } = addUser;
    e.preventDefault();
    if (!fullName || !email || !password) {
      toast.error("اطلاعات را بدرستی وارد نکرده اید");
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
        toast.success("کاربر جدید با موفقیت افزوده شد ...");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div>
      <BreadCrumb title={["داشبورد", "ایجاد کاربر"]} />

      <Form onSubmit={submitHandler}>
        <div className="flex flex-col gap-6 w-[50%]">
          <div className="flex flex-col">
            <label htmlFor="name">
              نام و نام خانوادگی: <span className="text-red-600">*</span>
            </label>
            <input
              name="fullName"
              onChange={changeHandler}
              id="name"
              className="focus:outline-none p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">
              ایمیل : <span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              onChange={changeHandler}
              id="email"
              className="focus:outline-none p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              رمز عبور : <span className="text-red-600">*</span>
            </label>
            <input
              name="password"
              onChange={changeHandler}
              id="password"
              className="focus:outline-none p-2 rounded"
            />
          </div>
        </div>
        <button className="px-3 py-1 bg-lime-600 text-white rounded hover:bg-lime-800 mt-10">
          ارسال
        </button>
      </Form>
      <Toaster />
    </div>
  );
};

export default AddUser;
