import AdminBookCard from "@/components/module/AdminBookCard";
import BreadCrumb from "@/components/module/BreadCrumb";
import Warning from "@/components/module/Warning";

const Books = ({ adminsBook }) => {
  return (
    <div>
      <BreadCrumb title={["داشبورد" , "کتاب ها"]} />
      {adminsBook.length ? (
        adminsBook.map((item) => (
          <AdminBookCard adminsBook={JSON.parse(JSON.stringify(item))} />
        ))
      ) : (
        <Warning text="هنوز کتابی ثبت نشده است" />
      )}
    </div>
  );
};

export default Books;
