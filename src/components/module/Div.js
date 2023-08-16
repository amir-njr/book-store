"use client";

// Atom
import { useAtom } from "jotai";
import { Setting } from "@/lib/atom";
const Div = ({ children }) => {
  const [aside] = useAtom(Setting);
  const { asideToggle } = aside;
  return (
    <div
      className={`${
        asideToggle ? "basis-11/12" : "basis-10/12"
      }  h-full mx-4 transition-all`}
    >
      {children}
    </div>
  );
};

export default Div;
