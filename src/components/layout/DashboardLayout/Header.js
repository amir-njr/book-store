"use client";

// Link
import Link from "next/link";
// Atom
import { useAtom } from "jotai";
import { Setting } from "@/lib/atom";

// Icon
import Close from "@/components/icons/Close";
import Bars from "@/components/icons/Bars";
import { useSession } from "next-auth/react";
// React Icon
import { AiOutlineHome } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { TbUserCircle } from "react-icons/tb";

export default function DashboardHeader({ createdAt, name, role }) {
  const [aside, setAside] = useAtom(Setting);
  const { asideToggle } = aside;

  const session = useSession();

  return (
    <div className="flex items-center h-24 bg-blue-100 rounded-b-md px-4 py-2">
      <div className="basis-4/12 flex items-center justify-between">
        <div className="w-10 h-10">
          <span
            onClick={() => setAside({ ...aside, asideToggle: !asideToggle })}
            className={`${
              asideToggle ? "opacity-0" : "opacity-100"
            } transition-all absolute cursor-pointer`}
          >
            <Close />
          </span>

          <span
            onClick={() => setAside({ ...aside, asideToggle: !asideToggle })}
            className={`${
              asideToggle ? "opacity-100" : "opacity-0"
            } transition-all absolute cursor-pointer`}
          >
            <Bars />
          </span>
        </div>
        <div className="md:bg-white md:px-4 px-2 md:py-4 py-1 md:shadow-md md:flex md:flex-row flex flex-col md:text-base text-xs items-center gap-3 rounded font-bold">
          <span className="text-center">تاریخ عضویت:</span>
          <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        </div>
      </div>
      <div className="basis-4/12 flex justify-center">
        <Link
          className="md:bg-white md:px-4 px-2 md:py-1 py-1 md:shadow-md md:flex flex flex-col items-center text-xs md:text-base gap-3 rounded hover:text-blue-400 font-bold"
          href="/"
        >
          <span className="text-xl">
            <AiOutlineHome />
          </span>
          
          صفحه اصلی
        </Link>
      </div>
      <div className="basis-4/12 flex gap-3 items-center justify-end">
        <div className="flex gap-3 items-center md:bg-white rounded p-2 md:shadow-md">
          <TbUserCircle className="text-6xl text-blue-500" />
          <div className="flex flex-col lg:border-l-2 lg:border-black pl-3">
            <span className="text-xs">
              {role === "ADMIN" ? "ادمین" : "کاربر"}
            </span>
            <span>{name ?? ""}</span>
          </div>
          <p className="hidden lg:block">
            <span className="text-xl">
              <GoMail />
            </span>
            {session.data?.user.email}
          </p>
        </div>
      </div>
    </div>
  );
}
