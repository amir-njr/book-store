import BreadCrumb from "@/components/module/BreadCrumb";
import UserCard from "@/components/module/UserCard";
import Warning from "@/components/module/Warning";

const Users = ({ users }) => {
  return (
    <div>
      <BreadCrumb title={["داشبورد", "کاربران"]} />
      <div className="flex flex-col gap-16">
        {users.length ? (
          users.map((i) => (
            <UserCard key={i._id} users={JSON.parse(JSON.stringify(i))} />
          ))
        ) : (
          <Warning text="کاربری وجود ندارد" />
        )}
      </div>
    </div>
  );
};

export default Users;
