"use client";

// State
import { useState } from "react";
// Atom
import { useAtom } from "jotai";
import { Setting } from "@/lib/atom";
// Pathname
import { usePathname } from "next/navigation";
// Link
import Link from "next/link";
// Next-Auth/React
import { signOut } from "next-auth/react";

// Icons
import Book from "@/components/icons/Book";
import Profile from "@/components/icons/Profile";
import Logout from "@/components/icons/LogOut";
import Users from "@/components/icons/Users";
// React Icon
import { BsSpeedometer2 } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { VscSettings } from "react-icons/vsc";

export default function Aside({ role }) {
  const pathname = usePathname();

  const [aside] = useAtom(Setting);
  const { asideToggle } = aside;
  const [dropdown, setDropdown] = useState(false);

  return (
    <section
      className={`${
        asideToggle ? "basis-1/12" : "basis-2/12"
      } bg-blue-100 h-full transition-all rounded-l-md overflow-hidden`}
    >
      <div className="h-24 bg-blue-600 flex items-center justify-center">
        <h1
          className={`${
            asideToggle ? "text-2xl" : "md:text-4xl lg:text-5xl"
          } text-white font-bold transition-all md:block hidden`}
        >
          شهر کتاب
        </h1>
      </div>

      <div className="flex flex-col gap-4 px-2 mt-5">
        <Link
          className={`${
            asideToggle ? "justify-center" : "md:justify-start justify-center"
          } ${
            pathname === "/dashboard" && "md:bg-blue-400 md:text-white md:border-none border-b-2 border-blue-800"
          } flex items-center gap-2 hover:bg-blue-400 hover:text-white hover:fill-white md:p-2 md:rounded w-full transition-all`}
          href="/dashboard"
        >
          <span className="text-2xl">
            <BsSpeedometer2 />
          </span>
          <span className="md:block hidden">
            {asideToggle ? " " : "داشبورد"}
          </span>
        </Link>
        {role === "ADMIN" ? (
          <Link
            className={`${
              asideToggle ? "justify-center" : "md:justify-start justify-center"
            } ${
              pathname === "/dashboard/my-books" && "md:bg-blue-400 md:text-white md:border-none border-b-2 border-blue-800"
            } flex gap-2 hover:bg-blue-400 hover:text-white md:p-2 md:rounded w-full transition-all`}
            href="/dashboard/users"
          >
            <span>
              <Users />
            </span>
            <span className="md:block hidden">
              {asideToggle ? " " : "کاربران"}
            </span>
          </Link>
        ) : (
          <Link
            className={`${
              asideToggle ? "justify-center" : "md:justify-start justify-center"
            } ${
              pathname === "/dashboard/my-books" && "md:bg-blue-400 md:text-white md:border-none border-b-2 border-blue-800"
            } flex gap-2 hover:bg-blue-400 hover:text-white md:p-2 md:rounded w-full transition-all`}
            href="/dashboard/my-books"
          >
            <span>
              <Book />
            </span>
            <span className="md:block hidden">
              {asideToggle ? " " : "کتاب های من"}
            </span>
          </Link>
        )}
        {role === "USER"
          ? null
          : role === "ADMIN" && (
              <div>
                <span>
                  <span
                    onClick={() => setDropdown(!dropdown)}
                    className={`${
                      asideToggle ? "justify-center" : "md:justify-start justify-center"
                    } flex items-center gap-2 hover:bg-blue-400 hover:text-white p-2 rounded w-full transition-all cursor-pointer`}
                  >
                    <span>
                      <VscSettings className="text-2xl" />
                    </span>
                    <span className="md:block hidden">
                      {asideToggle ? " " : "مدیریت کتاب ها"}
                    </span>
                  </span>
                </span>

                <div
                  className={`${
                    dropdown ? "md:h-28 h-20" : "h-0"
                  } overflow-hidden transition-all text-sm md:px-4`}
                >
                  <Link
                    className={`${
                      asideToggle
                        ? "justify-center"
                        : "md:justify-start justify-center"
                    } ${
                      pathname === "/dashboard/add-book" &&
                      "md:bg-blue-400 md:text-white md:border-none border-b-2 border-blue-800"
                    } flex items-center gap-2 hover:bg-blue-400 hover:text-white md:p-2 md:rounded w-full transition-all`}
                    href="/dashboard/add-book"
                  >
                    <span>
                      <BiBookAdd className="text-2xl" />
                    </span>
                    <span className="lg:block hidden">
                      {asideToggle ? " " : "اضافه کردن کتاب"}
                    </span>
                  </Link>

                  <Link
                    className={`${
                      asideToggle
                        ? "justify-center"
                        : "md:justify-start justify-center"
                    } ${
                      pathname === "/dashboard/books" &&
                      "md:bg-blue-400 md:text-white md:border-none border-b-2 border-blue-800"
                    } flex items-center gap-2 hover:bg-blue-400 hover:text-white md:p-2 md:rounded w-full transition-all`}
                    href="/dashboard/books"
                  >
                    <span>
                      <ImBooks className="text-2xl" />
                    </span>
                    <span className="lg:block hidden">
                      {asideToggle ? " " : "کتاب ها"}
                    </span>
                  </Link>
                </div>
              </div>
            )}

        <Link
          className={`${
            asideToggle ? "justify-center" : "md:justify-start justify-center"
          } ${
            pathname === "/dashboard/profile" && "md:bg-blue-400 md:text-white md:border-none border-b-2 border-blue-800"
          } flex gap-2 hover:bg-blue-400 hover:text-white md:p-2 md:rounded w-full transition-all`}
          href="/dashboard/profile"
        >
          <span>
            <Profile />
          </span>
          <span className="md:block hidden">
            {asideToggle ? " " : "پروفایل"}
          </span>
        </Link>

        <button
          onClick={signOut}
          className={`${
            asideToggle ? "justify-center" : "md:justify-start justify-center"
          } flex text-red-500 gap-2 hover:bg-red-600 hover:text-white p-2 rounded w-full transition-all`}
        >
          <span>
            <Logout />
          </span>
          <span className="md:block hidden">{asideToggle ? " " : "خروج"}</span>
        </button>
      </div>
    </section>
  );
}
