"use client"

import { useState } from "react";

// Element
import Input from "@/components/elements/Input";
export default function Right() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    nationalCode: "",
    phone: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <section className="basis-6/12">
      <form className="flex flex-col gap-5 w-full rounded-md">
        <Input
          value={user.name}
          onChange={changeHandler}
          placeholder="نام تان را وارد نمایید ..."
          type="text"
          name="name"
        />
        <Input
          value={user.lastName}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="نام خانوادگی تان را وارد نمایید ..."
          type="text"
          name="lastName"
        />

        <Input
          value={user.nationalCode}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="  کد ملی تان را وارد نمایید..."
          type="text"
          name="nationalCode"
        />

        <Input
          value={user.phone}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder=" شماره تلفن تان را وارد نمایید..."
          type="text"
          name="phone"
        />

        <Input
          value={user.email}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="ایمیل تان را وارد نمایید..."
          type="email"
          name="email"
        />

        <Input
          value={user.password}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="رمز عبورتان را وارد نمایید..."
          type="password"
          name="password"
        />

        <div className="flex justify-center">
          <button className="bg-lime-500 w-28 text-center rounded-md py-2 text-white hover:bg-lime-600 transition-all">
            ویرایش
          </button>
          
        </div>
      </form>
    </section>
  );
}
