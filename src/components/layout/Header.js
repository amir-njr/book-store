"use client";

// Link
import Link from "next/link";
// Session
import { useSession } from "next-auth/react";
// Selector
import { useSelector } from "react-redux";

// Components
import Navbar from "../template/Navbar/Navbar";
// Icons
import Shop from "../icons/Shop";
import LogIn from "../icons/LogIn";
import Magnifying from "../icons/Magnifying";
import { BsSpeedometer2 } from "react-icons/bs";

const Header = ({userName}) => {
  
  const { data } = useSession();
  const card = useSelector((state) => state.card);

  return (
    <header className="bg-blue-100 sticky top-0">
      <div className="container mx-auto md:flex md:flex-row flex flex-col gap-3 items-center py-4">
        <div className="basis-4/12">
          <h1 className="text-6xl font-bold">شهرکتاب</h1>
        </div>
        <div className="basis-4/12 hidden md:flex justify-center">
          <button className="bg-blue-500 text-white rounded-r w-14 flex justify-center items-center hover:bg-blue-600">
            <Magnifying />
          </button>
          <input
            type="search"
            className="w-full rounded-l-full p-2 focus:outline-none focus:bg-zinc-100 border-2 border-blue-500"
            placeholder="برای جست و جو اینجا تایپ نمایید ..."
          />
        </div>
        <div className="basis-4/12 flex justify-end gap-5">
          <Link href="/basket" className="flex flex-col items-center gap-2">
            <span className="relative">
              <span className="absolute bottom-[-6px] right-[-4px] w-5 h-5 bg-blue-600 rounded-full flex justify-center text-white">
                {card.itemCounter}
              </span>
              <Shop />
            </span>
            <span className="hover:text-blue-600">سبدخرید</span>
          </Link>
          <div href="/basket" className="flex flex-col items-center gap-1">
            <div className="flex flex-col items-center justify-center gap-2">
              {data ? (
                <Link
                  href="/dashboard"
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <span className="text-3xl">
                    <BsSpeedometer2 />
                  </span>
                  پنل کاربری
                </Link>
              ) : (
                <>
                  <LogIn />
                  <div className="flex gap-2">
                    <Link className="hover:text-blue-600" href="/signup">
                      ثبت نام
                    </Link>
                    |
                    <Link className="hover:text-blue-600" href="/signin">
                      ورود
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Navbar userName={userName} />
    </header>
  );
};

export default Header;
