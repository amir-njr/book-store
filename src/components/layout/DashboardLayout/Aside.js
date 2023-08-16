"use client";

// Atom
import { useAtom } from "jotai";
import { Setting } from "@/lib/atom";
// Pathname
import { usePathname } from "next/navigation";
// Link
import Link from "next/link";

// Icons
import Book from "@/components/icons/Book";
import Profile from "@/components/icons/Profile";
import Logout from "@/components/icons/LogOut";
import { BsSpeedometer2 } from "react-icons/bs";
import { signOut } from "next-auth/react";

export default function Aside() {
  const pathname = usePathname();

  const [aside] = useAtom(Setting);
  const { asideToggle } = aside;

  return (
    <section
      className={`${
        asideToggle ? "basis-1/12" : "basis-2/12"
      } bg-blue-100 h-full transition-all rounded-l-md overflow-hidden`}
    >
      <div className="h-24 bg-blue-600 flex items-center justify-center">
        <h1
          className={`${
            asideToggle ? "text-2xl" : "text-5xl"
          } text-white font-bold transition-all`}
        >
          شهر کتاب
        </h1>
      </div>

      <div className="flex flex-col gap-4 px-2 mt-5">
        <Link
          className={`${asideToggle ? "justify-center" : "justify-start"} ${
            pathname === "/dashboard" ? "bg-blue-400 text-white" : ""
          } flex items-center gap-2 hover:bg-blue-400 hover:text-white hover:fill-white p-2 rounded w-full transition-all`}
          href="/dashboard"
        >
          <span className="text-2xl">
            <BsSpeedometer2 />
          </span>
          {asideToggle ? " " : "داشبورد"}
        </Link>

        <Link
          className={`${asideToggle ? "justify-center" : "justify-start"} ${
            pathname === "/dashboard/my-books" ? "bg-blue-400 text-white" : ""
          } flex gap-2 hover:bg-blue-400 hover:text-white p-2 rounded w-full transition-all`}
          href="/dashboard/my-books"
        >
          <span>
            <Book />
          </span>
          {asideToggle ? " " : "کتاب های من"}
        </Link>

        <Link
          className={`${asideToggle ? "justify-center" : "justify-start"} ${
            pathname === "/dashboard/add-book" ? "bg-blue-400 text-white" : ""
          } flex gap-2 hover:bg-blue-400 hover:text-white p-2 rounded w-full transition-all`}
          href="/dashboard/add-book"
        >
          <span>
            <Book />
          </span>
          {asideToggle ? " " : "ایجاد کتاب"}
        </Link>

        <Link
          className={`${asideToggle ? "justify-center" : "justify-start"} ${
            pathname === "/dashboard/profile text-white" ? "bg-blue-400" : ""
          } flex gap-2 hover:bg-blue-400 hover:text-white p-2 rounded w-full transition-all`}
          href="/dashboard/profile"
        >
          <span>
            <Profile />
          </span>
          {asideToggle ? " " : "پروفایل"}
        </Link>

        <button
          onClick={signOut}
          className={`${
            asideToggle ? "justify-center" : "justify-start"
          } flex text-red-500 gap-2 hover:bg-red-600 hover:text-white p-2 rounded w-full transition-all`}
        >
          <span>
            <Logout />
          </span>
          {asideToggle ? " " : "خروج"}
        </button>
      </div>
    </section>
  );
}
