// React-Icon
import { BsFillBoxFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
// Module
import BreadCrumb from "components/module/BreadCrumb";
import DashCard from "components/module/DashCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <BreadCrumb title={["داشبورد"]} />
      <div className="flex gap-2 justify-between">
        <DashCard statistics="20" icon={<BsFillBoxFill className="text-3xl" />} color="blue" text="تعداد محصولات" />
        <DashCard statistics="8" icon={<AiFillDollarCircle className="text-3xl" />} color="purple" text="فروش" />
        <DashCard statistics="100,000" icon={<FaSackDollar className="text-3xl" />} color="green" text="سود" />
        <DashCard statistics="150" icon={<FaUsers className="text-3xl" />} color="orange" text="کاربران" />
      </div>
    </div>
  );
};

export default Dashboard;
