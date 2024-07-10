// Components
import Aside from "./Aside";
import Header from "./Header";

const DashLayout = ({ children, userData }) => {
  const { fullName, email, role } = userData;
  return (
    <div className="flex gap-2">
      <Aside role={role} />

      <div className="w-full">
        <Header fullName={fullName} email={email} />
        <div className="mt-8 px-4">{children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
