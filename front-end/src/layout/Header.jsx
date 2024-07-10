// State
import { useState } from "react";
// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { FaHome } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaBarsStaggered } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BiLogInCircle } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";

// Module
import SerchInput from "../components/module/SerchInput";
import CounterBook from "../components/module/CounterBook";
import DropDown from "../components/module/DropDown";
// Shared
import Logo from "components/shared/Logo";
// Custom-Hook
import { useCart } from "context/CartContext";

const Header = ({ fullName }) => {
  const [state] = useCart();
  const { itemsCounter } = state;
  const [navDropdown, setNavDropdown] = useState(false);
  const [dashDropdown, setDashDropdown] = useState(false);
  return (
    <header className="sticky top-0 bg-[#f3f4f8] z-10">
      <div className="container mx-auto px-10 flex justify-between items-center md:py-6 py-4">
        <Logo text="شهر کتاب" />
        <SerchInput />
        <CounterBook itemsCounter={itemsCounter} />
      </div>
      <div className="container mx-auto px-10 bg-blue-600 flex justify-between items-center text-white py-2">
        <div className="relative md:hidden">
          <button onClick={() => setNavDropdown(!navDropdown)}>
            <FaBarsStaggered className="text-2xl" />
          </button>
          <DropDown dropdown={navDropdown}>
            <Link
              to="/home"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <FaHome />
              صفحه اصلی
            </Link>
            <Link
              to="/about-us"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <IoMdHelpCircle />
              درباره ما
            </Link>
            <Link
              to="/contact-us"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <BiSupport />
              تماس با ما
            </Link>
          </DropDown>
        </div>
        <nav className="md:flex md:items-center md:gap-16 hidden">
          <Link
            className="hover:text-gray-300 flex items-center gap-1"
            to="/home"
          >
            <FaHome />
            صفحه اصلی
          </Link>
          <Link
            className="hover:text-gray-300 flex items-center gap-1"
            to="/about-us"
          >
            <IoMdHelpCircle />
            درباره ما
          </Link>
          <Link
            className="hover:text-gray-300 flex items-center gap-1"
            to="/contact-us"
          >
            <BiSupport />
            تماس با ما
          </Link>
        </nav>

        <div className="md:hidden relative">
          <button
            onClick={() => setDashDropdown(!dashDropdown)}
            className="cursor-pointer"
          >
            <CgProfile className="text-2xl" />
          </button>

          <DropDown position={true} dropdown={dashDropdown}>
            <Link
              to="/sign-in"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <BiLogInCircle className="text-xl" />
              ورود
            </Link>
            <Link
              to="/sign-up"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <TiContacts className="text-xl" />
              ثبت نام
            </Link>
          </DropDown>
        </div>

        <div className="md:flex md:items-center md:gap-2 hidden">
          {fullName ? (
            <div className="md:flex md:items-center md:gap-10 hidden">
              <span>
                <span className="font-bold text-black">{fullName}</span> عزیز،
                خوش آمدید 👋
              </span>
              <Link className="hover:text-gray-300" to="/dashboard">
                داشبورد
              </Link>
            </div>
          ) : (
            <div className="md:flex md:items-center md:gap-2 hidden">
              <Link className="hover:text-gray-300" to="/sign-in">
                ورود
              </Link>
              /
              <Link className="hover:text-gray-300" to="/sign-up">
                ثبت نام
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
