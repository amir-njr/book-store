// State
import { useState } from "react";
// React-Rotuer-Dom
import { Link, useLocation } from "react-router-dom";
// Module
import DashLink from "components/module/DashLink";
// Shared
import Logo from "components/shared/Logo";
// React-Icon
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { PiBooksFill } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
// Atom
import { useAtom } from "jotai";
import { Setting } from "utils/atom";

const Aside = ({ role }) => {
  const [Udropdown, setUDropdown] = useState(false);
  const [Bdropdown, setBDropdown] = useState(false);

  const [setting] = useAtom(Setting);
  const { dashToggle } = setting;

  const { pathname } = useLocation();

  return (
    <aside
      className={`${
        dashToggle ? "basis-1/12" : "basis-2/12"
      } border bg-white h-[100vh] transition-all`}
    >
      <h1 className="flex justify-center items-center border-b h-16">
        <Logo color={true} text="شهرکتاب" />
      </h1>
      <div className="flex flex-col gap-2 mt-6 border-b pb-4">
        <DashLink
          text="داشبورد"
          href="/dashboard"
          icon={<MdDashboard className="text-xl" />}
          pathName={pathname}
        />

        {role === "USER" ? (
          <DashLink
            text="کتاب های من"
            href="/dashboard/my-books"
            icon={<FaBookOpen className="text-xl" />}
          />
        ) : (
          <>
            <div>
              <span
                onClick={() => setUDropdown(!Udropdown)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
              >
                <FaUserEdit className="text-2xl" />
                کاربر
              </span>
              <div
                className={`${
                  Udropdown ? "h-[70px]" : "h-0 overflow-hidden"
                } flex flex-col transition-all px-3`}
              >
                <DashLink
                  text="کاربران"
                  href="/dashboard/users"
                  icon={<FaUsers />}
                  pathName={pathname}
                  sub={true}
                />

                <DashLink
                  text="ایجاد کاربر"
                  href="/dashboard/add-user"
                  icon={<IoMdAddCircle />}
                  pathName={pathname}
                  sub={true}
                />
              </div>
            </div>
            <div>
              <span
                onClick={() => setBDropdown(!Bdropdown)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
              >
                <IoBook className="text-xl" />
                کتاب
              </span>
              <div
                className={`${
                  Bdropdown ? "h-[70px]" : "h-0 overflow-hidden"
                } flex flex-col transition-all px-3`}
              >
                <DashLink
                  text="کتاب ها"
                  href="/dashboard/books"
                  icon={<PiBooksFill />}
                  pathName={pathname}
                  sub={true}
                />

                <DashLink
                  text="ایجاد کتاب"
                  href="/dashboard/add-book"
                  icon={<IoMdAddCircle />}
                  pathName={pathname}
                  sub={true}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <DashLink
        text="خروج"
        btn={true}
        icon={<IoLogOutOutline className="text-xl" />}
      />
    </aside>
  );
};

export default Aside;
