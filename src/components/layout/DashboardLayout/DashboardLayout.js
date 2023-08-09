"use client";
import Aside from "./Aside";
import Header from "./Header";

// Atom
import { useAtom } from "jotai";
import { Setting } from "@/lib/atom";

const DashboardLayout = ({ children }) => {
  const [aside] = useAtom(Setting);
  const { asideToggle } = aside;
  return (
    <div className="flex h-[100vh]">
      <Aside />

      <div
        className={`${
          asideToggle ? "basis-11/12" : "basis-10/12"
        }  h-full mx-4 transition-all`}
      >
        <Header />
        <div className="my-7">
        {children}

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
