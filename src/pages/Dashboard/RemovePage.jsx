// Module
import BreadCrumb from "components/module/BreadCrumb";

const RemovePage = () => {
  return (
    <div>
      <BreadCrumb title={["داشبورد", "حذف محصول"]} />
      <div className="mt-10 flex flex-col gap-4 items-start">
        <input className="border rounded w-80 p-1" placeholder="لطفا آیدی محصول را وارد نمائید..." />
        <button className="bg-red-600 text-white px-6 py-1 rounded hover:bg-red-700">حذف</button>
      </div>
    </div>
  );
};

export default RemovePage;
