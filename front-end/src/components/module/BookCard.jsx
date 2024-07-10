// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { FaMoneyBillWave } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";

// Common
import {  productQty, sp } from "utils/common";
// Custom-Hook
import { useCart } from "context/CartContext";
// Img
import emptyPhoto from "../../assets/img/remove-photo.png";

const BookCard = ({ book, type = false }) => {
  const { title, image, price, _id: id, discount, orginalPrice } = book;
  

  const [state, dispatch] = useCart();

  const qty = productQty(state, id);

  return (
    <div
      className={`${
        type
          ? "lg:flex-row flex flex-col justify-between items-center gap-6 lg:h-28 h-fit"
          : "flex flex-col gap-6"
      } border bg-white p-4 rounded hover:shadow-2xl`}
    >
      <div
        className={`${
          type ? "" : "border-b-2"
        } flex justify-center relative z-0`}
      >
        <img
          className={`${type && "h-24"}`}
          src={image ? image : emptyPhoto}
          alt={title}
        />
        {discount && (
          <span className="absolute left-[-15px] top-[5px] bg-red-600 text-white px-4 rotate-[-45deg]">
            {discount}%
          </span>
        )}
      </div>
      <div className="flex flex-col gap-4 items-end">
        <h1 className={`${type && "gap-8"} flex justify-between w-full`}>
          <MdOutlineDriveFileRenameOutline className="text-xl text-blue-700" />
          {title}
        </h1>
        <span className="flex justify-between w-full">
          <FaMoneyBillWave className="text-xl text-lime-600" />
          {discount ? (
            <div className="flex gap-4">
              <span>{sp(price)}</span>
              <span>=</span>
              <span className="line-through text-red-600">
                {sp(orginalPrice)}
              </span>
            </div>
          ) : (
            <span>{sp(price)}</span>
          )}
        </span>
      </div>
      <div className={`${type && "gap-10"} flex justify-between text-white`}>
        <div className="flex items-center gap-2">
          {qty === 0 ? (
            <button
              onClick={() => dispatch({ type: "ADD", payload: book })}
              className="bg-blue-600 p-2 rounded"
            >
              افزودن
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: book })}
              className="bg-blue-600 p-2 rounded h-8 w-7 flex items-center justify-center"
            >
              +
            </button>
          )}
          {qty > 0 && <span className="text-black">{qty}</span>}
          {qty === 1 && (
            <>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: book })}
                className="bg-blue-600 p-2 rounded"
              >
                <BsTrash3Fill />
              </button>
            </>
          )}
          {qty >= 2 && (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: book })}
              className="bg-blue-600 p-2 rounded h-8 w-7 flex items-center justify-center"
            >
              -
            </button>
          )}
        </div>
        <Link
          className="bg-[#222222] px-2 flex items-center rounded"
          to={`/detail/${id}`}
        >
          جزئیات
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
