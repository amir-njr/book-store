"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const UserCard = ({ users }) => {
  const { name, lastName, email, nationalCode, phone, role, _id, createdAt } =
    users;

  const router = useRouter();
  async function deleteHandler() {
    const res = await fetch(`/api/users/delete/${_id}`, {
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
    <div>
      <table className="w-full shadow-xl rounded-b-xl overflow-hidden">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-6 py-3">نام</th>
            <th className="px-6 py-3">نام خانوادگی</th>
            <th className="px-6 py-3">ایمیل</th>
            <th className="px-6 py-3">کد ملی</th>
            <th className="px-6 py-3">شماره تلفن</th>
            <th className="px-6 py-3">تاریخ ثبت نام</th>
            <th className="px-6 py-3">نوع دسترسی</th>
            <th className="px-6 py-3">*</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-600  hover:bg-blue-700 text-sm text-white text-center">
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4">{lastName}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">{nationalCode}</td>
            <td className="px-6 py-4">{phone}</td>
            <td className="px-6 py-4">
              {new Date(createdAt).toLocaleDateString("fa-IR")}
            </td>
            <td className="px-6 py-4">{role}</td>
            <td className="px-6 py-4">
              <button
                onClick={deleteHandler}
                className="font-medium text-white hover:underline bg-red-500 py-1 px-2 rounded"
              >
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};

export default UserCard;
