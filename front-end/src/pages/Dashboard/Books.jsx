// Hooks
import { useEffect, useState } from "react";
// Config - Api
import { BookBaseUrl } from "configs/api";
// Module
import Count from "components/module/Count";
import BreadCrumb from "components/module/BreadCrumb";
import DashBookCard from "components/module/DashBookCard";
// Loader
import { Triangle } from "react-loader-spinner";

const Books = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(BookBaseUrl("books"), {
      method: "GET",
    });
    const { books } = await res.json();
    setData(books);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Count length={data.length} address={<BreadCrumb title={["داشبورد" , "کتاب ها"]}  />} />

      <div
        className={`${
          data.length ? "flex flex-col gap-5" : "flex justify-center"
        }`}
      >
        {data?.length ? (
          <>
            {data?.map((book) => (
              <DashBookCard
                key={book._id}
                title={book.title}
                price={book.price}
                description={book.description}
                id={book._id}
                createdAt={book.createdAt}
              />
            ))}
          </>
        ) : (
          <Triangle
            visible={true}
            height="200"
            width="200"
            color="blue"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
    </div>
  );
};

export default Books;
