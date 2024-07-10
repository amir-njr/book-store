// Atom
import { useAtom } from "jotai";
import { Setting } from "utils/atom";
// React-Icon
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const Header = ({ fullName, email }) => {
  const [setting, setSetting] = useAtom(Setting);
  const { dashToggle } = setting;

  return (
    <header
      className={`${
        dashToggle ? "basis-11/12" : "basis-10/12"
      } border bg-white h-16 flex justify-between items-center px-4 transition-all`}
    >
      <div>
        {dashToggle ? (
          <button onClick={() => setSetting({ ...setting, dashToggle: false })}>
            <IoMdCloseCircle className="text-2xl" />
          </button>
        ) : (
          <button onClick={() => setSetting({ ...setting, dashToggle: true })}>
            <IoArrowForwardCircleSharp className="text-2xl" />
          </button>
        )}
      </div>

      <div>{new Date().toLocaleDateString("fa-IR")}</div>
      <div className="flex flex-col">
        <span>{fullName}</span>
      <span>{email}</span>
      </div>
    </header>
  );
};

export default Header;
