import { Link } from "react-router-dom";

const DashLink = ({ text, href, icon, btn = false }) => {
  return (
    <>
      {btn ? (
        <button className="flex items-center gap-1 px-4 py-2 hover:bg-red-600 hover:text-white transition-all w-full text-red-600">
          {icon}
          {text}
        </button>
      ) : (
        <Link
          className="flex items-center gap-1 px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
          to={href}
        >
          {icon}
          {text}
        </Link>
      )}
    </>
  );
};

export default DashLink;
