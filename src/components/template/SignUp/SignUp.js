"use client";

// Link
import Link from "next/link";
// State
import { useState } from "react";
// Toast
import { Toaster, toast } from "react-hot-toast";
// Router
import { useRouter } from "next/navigation";
// ThreeDots
import { ThreeDots } from "react-loader-spinner";

// Elements
import UserInput from "@/components/module/UserInput";

// Icon
import User from "@/components/icons/User";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const postHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("تکرار رمز مطابقت ندارد");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        lastName,
        email,
        nationalCode,
        phone,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    const data = await res.json();
    if (data.erorr) {
      toast.error(data.erorr);
    } else {
      toast.success(data.message);
      setTimeout(() => {
        router.push("/signin");
      }, 500);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-md bg-white">
      <div className="flex flex-col justify-center items-center">
        <span className="rounded-full h-20 w-20 bg-blue-300">
          <User />
        </span>
        <h1 className="text-xl">ثبت نام</h1>
      </div>

      <form className="flex flex-col gap-5 w-full rounded-md">
        <div className="flex gap-2">
          <UserInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="نام تان را وارد نمایید ..."
            type="text"
          />
          <UserInput
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="نام خانوادگی تان را وارد نمایید ..."
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <UserInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="شماره تلفنتان را وارد نمایید ..."
            type="text"
          />
          <UserInput
            value={nationalCode}
            onChange={(e) => setNationalCode(e.target.value)}
            placeholder="کد ملی تان را وارد نمایید ..."
            type="text"
          />
        </div>
        <UserInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل را وارد نمایید ..."
          type="email"
        />
        <UserInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور را وارد نمایید ..."
          type="password"
        />
        <UserInput
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          placeholder="رمز عبور را تایید نمایید ..."
          type="password"
        />
        <p className="flex gap-2 items-center justify-center">
          حساب کاربری دارید؟
          <Link
            className="text-blue-500 border-b-2 border-blue-500"
            href="/signin"
          >
            ورود
          </Link>
        </p>
        <div className="flex justify-center">
          {loading ? (
            <ThreeDots
              visible={true}
              ariaLabel="three-dots-loading"
              wrapperStyle={{ margin: "auto" }}
            />
          ) : (
            <button
              onClick={postHandler}
              className="bg-lime-500 w-28 text-white rounded-md py-2 hover:bg-lime-600 transition-all"
            >
              ارسال
            </button>
          )}
        </div>
      </form>
      <Toaster />
    </div>
  );
};
export default SignUp;
