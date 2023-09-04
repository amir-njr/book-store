
// Common
import { sp } from "@/utils/common";

// React-Icon
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
// Icon
import Dollar from "@/components/icons/Dollar";
import Pictures from "../Pictures";

const Right = ({ category, title, price }) => {
  return (
    <div className="md:flex md:flex-row flex flex-col gap-4 items-center basis-8/12">
      <Pictures category={category} />

      <div className="flex flex-col gap-5 md:gap-10">
        <h1 className="flex gap-2">
          <MdOutlineDriveFileRenameOutline className="text-2xl" />
          <span className="text-blue-600 font-bold">نام کتاب:</span>
          <span className="text-ghaleb-blue">{title}</span>
        </h1>
        <span className="flex items-center gap-2">
          <span className="flex items-center text-blue-600 font-bold">
            <Dollar />
            قیمت:
          </span>
          <span>{sp(price)}</span>
        </span>
        <span className="flex items-center gap-2">
          <MdFileDownload className="text-2xl" />
          <span className="text-blue-600 font-bold">وضعیت:</span> موجود
          <FaCheck className="text-lime-500" />
        </span>
      </div>
    </div>
  );
};

export default Right;
