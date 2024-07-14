// Hooks
import { useEffect, useState } from "react";
// Config - Api
import { UserBaseUrl } from "configs/api";
// Module
import Count from "components/module/Count";
import BreadCrumb from "components/module/BreadCrumb";
import UserCard from "components/module/UserCard";
// Loader
import { Triangle } from "react-loader-spinner";

const Users = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(UserBaseUrl("users"), {
      method: "GET",
    });
    const { users } = await res.json();
    setData(users);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Count
        length={data.length}
        address={<BreadCrumb title={["داشبورد", "کاربران"]} />}
      />

      <div
        className={`${
          data.length ? "flex flex-col gap-5" : "flex justify-center"
        }`}
      >
        {data?.length ? (
          <>
            {data?.map((user) => (
              <UserCard
                key={user._id}
                name={user.fullName}
                email={user.email}
                id={user._id}
                createdAt={user.createdAt}
                role={user.role}
              />
            ))}
          </>
        ) : (
          <Triangle
            visible={true}
            height="200"
            width="200"
            color="blue"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
    </div>
  );
};

export default Users;
