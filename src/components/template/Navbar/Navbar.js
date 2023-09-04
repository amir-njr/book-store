"use client";

// Link
import Link from "next/link";
// State
import { useState } from "react";
// React-Icons
import { FaBarsStaggered } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Navbar = ({ userName }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto flex items-center text-white py-2">
        <div className={`${!toggle && "overflow-hidden"} basis-6/12 relative flex items-center`}>
          <div className="hidden md:flex md:gap-8">
            <Link className="hover:text-black" href="/">
              صفحه اصلی
            </Link>
            <Link className="hover:text-black" href="about-us">
              درباره ما
            </Link>
            <Link className="hover:text-black" href="/contact-us">
              ارتباط با ما
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            <FaBarsStaggered className="text-3xl mr-2" />
          </button>
          <div
            className={`${
              toggle ? "h-40" : "h-0 gap-0 p-0"
            } md:hidden absolute flex flex-col gap-8 z-40 bg-blue-500 overflow-hidden top-8 p-2 rounded-l-md transition-all`}
          >
            <Link className="hover:text-black flex gap-2 items-center" href="/">
              <FaHome className="text-xl" />
              صفحه اصلی
            </Link>
            <Link
              className="hover:text-black flex gap-2 items-center"
              href="/about-us"
            >
              <FaAddressBook className="text-xl" />
              درباره ما
            </Link>
            <Link
              className="hover:text-black flex gap-2 items-center"
              href="/contact-us"
            >
              <BiSupport className="text-xl" />
              ارتباط با ما
            </Link>
          </div>
        </div>
        <div className="basis-6/12 flex justify-end">
          <span>
            {userName ? (
              <span>
                <span className="border-b">{userName} </span>
                عزیز، خوش آمدید ❤️
              </span>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
