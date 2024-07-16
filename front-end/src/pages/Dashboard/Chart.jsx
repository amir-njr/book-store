// Hooks
import { useEffect, useState } from "react";
// Configs - Api
import { InfoBaseUrl } from "configs/api";

const Chart = () => {
  const [info, setInfo] = useState({});
  const { userCount, bookCount, saleCount, profit } = info;
  useEffect(() => {
    fetch(InfoBaseUrl("get-info"), { method: "GET" })
      .then((res) => res.json())
      .then((json) => setInfo(json))
      .catch((err) => console.log(err));
  }, []);
  return <div>{bookCount}</div>;
};

export default Chart;
