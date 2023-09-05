"use client";

// Link
import Link from "next/link";
// Router
import { useRouter } from "next/navigation";
// Toaster
import { Toaster, toast } from "react-hot-toast";


// Common
import { sp } from "@/utils/common";
// Module
import Pictures from "./Pictures";
// React-Icon
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Dollar from "../icons/Dollar";

const AdminBookCard = ({ adminsBook }) => {
  const { title, price, category, _id } = adminsBook;

  const router = useRouter();
  async function deleteHandler() {
    const res = await fetch(`/api/books/delete/${_id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      setTimeout(() => {
        router.refresh();
      }, 500);
    }
  }

  return (
    <div className="flex flex-col border">
      <div className="md:flex md:flex-row flex flex-col p-5">
        <div className="md:flex md:flex-row flex flex-col basis-6/12 gap-4 items-center">
          <Pictures category={category} />

          <div className="flex flex-col md:gap-10 gap-5">
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

        <div className="basis-6/12 flex items-center justify-center md:mt-0 mt-3 gap-3">
          <Link
            href={`/dashboard/edit-book/${_id}`}
            className="border rounded flex items-center justify-center px-4 py-2 border-lime-500 hover:bg-lime-500 text-lime-500 hover:text-white w-32"
          >
            ویرایش
          </Link>
          <button
            onClick={deleteHandler}
            className="border rounded px-4 py-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white w-32"
          >
            حذف
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AdminBookCard;
