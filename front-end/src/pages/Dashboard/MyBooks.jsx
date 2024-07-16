// Hooks
import { useEffect, useState } from "react";
// Config - Api
import { UserBaseUrl } from "configs/api";
// Module
import MyBookCard from "components/module/MyBookCard";
import BreadCrumb from "components/module/BreadCrumb";
import Warning from "components/module/Warning";

const MyBooks = ({ email }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetcher();
  }, []);
  const fetcher = async () => {
    const res = await fetch(UserBaseUrl("get-peyment"), {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    setData(json);
  };
  if (data.status !== 200) fetcher();
  const { myBooks } = data;

  return (
    <div>
      <BreadCrumb title={["داشبورد", "کتاب های من"]} />

      {myBooks?.length ? (
        <div className="grid grid-cols-7 gap-6">
          {myBooks?.map((item) => (
            <MyBookCard
              key={item._id}
              title={item.title}
              qty={item.qty}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <Warning text="شما هنوز محصولی خریداری نکرده اید !!!" />
      )}
    </div>
  );
};

export default MyBooks;
