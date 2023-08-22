import UserCard from "@/components/module/UserCard";

const Users = ({ users }) => {

  return (
    <div className="flex flex-col gap-16">
      {users.map((item) => (
        <UserCard key={item._id} user={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};

export default Users;
