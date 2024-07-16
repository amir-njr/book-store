// Hooks
import { useEffect, useState } from "react";
// Link
import { Link } from "react-router-dom";
// React-Icon
import { BsFillBoxFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
// Module
import BreadCrumb from "components/module/BreadCrumb";
import DashCard from "components/module/DashCard";
// Utils
import { sp } from "utils/common";
// Configs - Api
import { InfoBaseUrl } from "configs/api";

const Dashboard = ({ role }) => {
  const [info, setInfo] = useState({});
  const { userCount, bookCount, saleCount, profit } = info;
  useEffect(() => {
    fetch(InfoBaseUrl("get-info"), { method: "GET" })
      .then((res) => res.json())
      .then((json) => setInfo(json))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <BreadCrumb title={["داشبورد"]} />
      <div className="flex gap-2 justify-between">
        {role === "USER" ? (
          <DashCard
            statistics="20"
            icon={<BsFillBoxFill className="text-3xl" />}
            color="blue"
            text="تعداد کتاب های خریداری شده"
          />
        ) : (
          <>
            <DashCard
              statistics={bookCount}
              icon={<BsFillBoxFill className="text-3xl" />}
              color="blue"
              text="تعداد کتاب ها"
            />
            <DashCard
              statistics={sp(saleCount || 0)}
              icon={<AiFillDollarCircle className="text-3xl" />}
              color="purple"
              text="فروش"
            />
            <DashCard
              statistics={sp(profit || 0)}
              icon={<FaSackDollar className="text-3xl" />}
              color="green"
              text="سود"
            />
            <DashCard
              statistics={userCount}
              icon={<FaUsers className="text-3xl" />}
              color="orange"
              text="کاربران"
            />
          </>
        )}
      </div>
      <Link to="/dashboard/chart">نمودار</Link>
    </div>
  );
};

export default Dashboard;
