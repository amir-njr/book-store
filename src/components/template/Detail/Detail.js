
// React-Icon
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


// Common
import { sp } from "@/utils/common";
// Icon
import Dollar from "@/components/icons/Dollar";
import Pictures from "@/components/module/Pictures";

const Detail = ({ detailBook }) => {
  const { title, price, category, description } = detailBook;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4 border-b-2 border-blue-500 pb-4">
        <div>
          <Pictures category={category} />
        </div>
        <div className="flex flex-col gap-10">
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
      <div>
        <h1 className="text-xl font-bold text-blue-600">توضیحات</h1>
        <p className="mt-6 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Detail;
