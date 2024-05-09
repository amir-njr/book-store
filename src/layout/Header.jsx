// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { FaHome } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

// Module
import SerchInput from "../components/module/SerchInput";
import CounterBook from "../components/module/CounterBook";
// Shared
import Logo from "components/shared/Logo";
// Custom-Hook
import { useCart } from "context/CartContext";

const Header = () => {
  const [state] = useCart();
  const { itemsCounter } = state;
  return (
    <header className="sticky top-0 bg-[#f3f4f8]">
      <div className="container mx-auto px-10 border flex justify-between items-center py-6">
        <Logo text="شهر کتاب" />
        <SerchInput />
        <CounterBook itemsCounter={itemsCounter} />
      </div>
      <div className="container mx-auto px-10 bg-blue-600 flex justify-between items-center text-white py-2">
        <nav className="flex items-center gap-16">
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

        <div className="flex items-center gap-2">
          <Link className="hover:text-gray-300" to="/sign-in">
            ورود
          </Link>
          /
          <Link className="hover:text-gray-300" to="/sign-up">
            ثبت نام
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
