"use client"

// Link
import Link from "next/link";
// Atom
import { useAtom } from "jotai";
import { Setting } from "@/lib/atom";

// Icon
import Close from "@/components/icons/Close";
import Bars from "@/components/icons/Bars";
import { useSession } from "next-auth/react";

export default function DashboardHeader() {
  
  const [aside, setAside] = useAtom(Setting);
  const { asideToggle } = aside;

  const session = useSession()


  return (
    <div className="flex items-center h-20 bg-blue-100 rounded-b-md px-4">
      <div className="basis-4/12 ">
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
      </div>
      <div className="basis-4/12 text-center">
        <Link
          className="bg-blue-400 p-4 rounded-full hover:text-white font-bold"
          href="/"
        >
          صفحه اصلی
        </Link>
      </div>
      <div className="basis-4/12 flex gap-3 items-center justify-end">
        <div className="rounded-full h-16 w-16 bg-red-600 flex justify-center items-center">
          P
        </div>
        <div className="flex flex-col border-l-2 border-black pl-3">
          <span>کاربر</span>
          <span>Amir</span>
        </div>
        <p>{session.data?.user.email}</p>
      </div>
    </div>
  );
}
