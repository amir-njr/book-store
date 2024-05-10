// React-Icon
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const BreadCrumb = ({ title }) => {
  return (
    <h1 className="flex items-center gap-1">
      {title.length > 1 ? (
        <>
          <span>{title[0]}</span>
          <MdOutlineKeyboardDoubleArrowLeft />
          <span className="text-blue-600 underline">{title[1]}</span>
        </>
      ) : (
        <span className="text-blue-600 underline">{title[0]}</span>
      )}
    </h1>
  );
};

export default BreadCrumb;
