"use client";

// Link
import Link from "next/link";
// State
import { useState } from "react";
// NextAuth
import { signIn } from "next-auth/react";
// Router
import { useRouter } from "next/navigation";
// Toast
import { Toaster, toast } from "react-hot-toast";
// Loader
import { ThreeDots } from "react-loader-spinner";

// Elements
import UserInput from "@/components/module/UserInput";

// Icon
import User from "@/components/icons/User";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const postHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("ورود موفقیت آمیز بود");
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-md bg-white">
      <div className="flex flex-col justify-center items-center">
        <span className="rounded-full h-20 w-20 bg-blue-300">
          <User />
        </span>
        <h1 className="text-xl">ورود به پنل</h1>
      </div>

      <form className="flex flex-col gap-5 w-full rounded-md">
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
        <p className="flex gap-2 items-center">
          حساب کاربری ندارید؟
          <Link
            className="text-blue-500 border-b-2 border-blue-500"
            href="/signup"
          >
            ثبت نام
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
export default SignIn;
