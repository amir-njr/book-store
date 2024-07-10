// React-Router-Dom
import { Link, useParams } from "react-router-dom";
// Custom-Hook
import { useDetail } from "context/BookContext";

// React-Icon
import { FaMoneyBillWave } from "react-icons/fa6";
import { TfiBackRight } from "react-icons/tfi";
// Utils
import { sp } from "utils/common";
// Img
import emptyPhoto from "../assets/img/remove-photo.png"

const DetailPage = () => {
  const { id } = useParams();
  const detailBook = useDetail(id);
  const { title, image, price, description } = detailBook;
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      <div className="flex flex-col justify-center basis-8/12 border-2 border-dashed gap-20 p-4 rounded bg-white">
        <h1 className="text-blue-600 text-4xl font-bold">{title}</h1>
        <p>{description}</p>

        <div className="flex justify-between">
          <Link
            className="bg-[#222222] p-2 rounded text-white flex gap-2 items-center"
            to="/home"
          >
            بازگشت به صفحه اصلی
            <TfiBackRight className="text-xl" />
          </Link>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-xl text-lime-600" />
            <span>{sp(price)}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center basis-4/12 rounded bg-white border-2 border-dashed border-blue-600">
        <img className="h-[500px]" src={image ? image : emptyPhoto} alt={title} />
      </div>
    </div>
  );
};

export default DetailPage;
