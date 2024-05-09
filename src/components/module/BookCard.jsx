// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icon
import { FaMoneyBillWave } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";

// Common
import { productQty, shourter } from "utils/common";
// Custom-Hook
import { useCart } from "context/CartContext";

const BookCard = ({ book, type = false }) => {
  const { title, image, price, isbn13 } = book;
  const [state, dispatch] = useCart();

  const qty = productQty(state, isbn13);

  return (
    <div
      className={`${
        type
          ? "flex justify-between items-center gap-6 h-28"
          : "flex flex-col gap-6"
      } border bg-white p-4 rounded hover:shadow-2xl`}
    >
      <div className={`${type ? "" : "border-b-2"} flex justify-center`}>
        <img className={`${type && "h-24"}`} src={image} alt={title} />
      </div>
      <div className="flex flex-col gap-4 items-end">
        <h1 className={`${type && "gap-8"} flex justify-between w-full`}>
          <MdOutlineDriveFileRenameOutline className="text-xl text-blue-700" />
          {shourter(title)}
        </h1>
        <span className="flex justify-between w-full">
          <FaMoneyBillWave className="text-xl text-lime-600" />
          {price}
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
          to={`/detail/${isbn13}`}
        >
          جزئیات
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
