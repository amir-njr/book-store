// Components
import Aside from "./Aside";
import Header from "./Header";

const DashLayout = ({ children }) => {
  return (
    <div className="flex gap-2">
      <Aside />

      <div className="w-full">
        <Header />
        <div className="mt-8 px-4">{children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
