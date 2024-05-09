// Module
import DashLink from "components/module/DashLink";
// Shared
import Logo from "components/shared/Logo";
// React-Icon
import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { PiBooksFill } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
// Atom
import { useAtom } from "jotai";
import { Setting } from "utils/atom";

const Aside = () => {
  const [setting] = useAtom(Setting);
  const { dashToggle } = setting;
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
          href=""
          icon={<MdDashboard className="text-xl" />}
        />
        <DashLink
          text="کتاب های من"
          href=""
          icon={<FaBookOpen className="text-xl" />}
        />
        <DashLink
          text="کاربران"
          href=""
          icon={<FaUsers className="text-xl" />}
        />
        <DashLink
          text="کتاب ها"
          href=""
          icon={<PiBooksFill className="text-xl" />}
        />
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
