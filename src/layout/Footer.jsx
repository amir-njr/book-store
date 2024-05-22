// React-Icon
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#222222]">
      <div className="lg:flex lg:flex-row  flex flex-col items-center md:px-10 px-6 py-8">
        <div className="basis-6/12 flex flex-col gap-2 text-white">
          <p>&copy; تمامی حقوق این سایت محفوظ می باشد.</p>
          <p className="flex gap-2">
            طراحی و توسعه داده شده توسط:
            <span className="text-blue-600 font-bold text-lg">امیر نجار</span>
          </p>
        </div>

        <div className="basis-6/12 flex items-center justify-end gap-4">
          <FaInstagram className="bg-[var(--bg-dark)] p-4 box-content text-3xl rounded-lg text-[#FECB1B] hover:text-[var(--text-dark)] hover:bg-[#FECB1B] cursor-pointer transition-all" />
          <FaTelegramPlane className="bg-[var(--bg-dark)] p-4 box-content text-3xl rounded-lg text-[#FECB1B] hover:text-[var(--text-dark)] hover:bg-[#FECB1B] cursor-pointer transition-all" />
          <SiWhatsapp className="bg-[var(--bg-dark)] p-4 box-content text-3xl rounded-lg text-[#FECB1B] hover:text-[var(--text-dark)] hover:bg-[#FECB1B] cursor-pointer transition-all" />
          <HiOutlineMail className="bg-[var(--bg-dark)] p-4 box-content text-3xl rounded-lg text-[#FECB1B] hover:text-[var(--text-dark)] hover:bg-[#FECB1B] cursor-pointer transition-all" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
