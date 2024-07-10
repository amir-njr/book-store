// React-Router-Dom
import { Link } from "react-router-dom";
// React-Icons
import { MdFactCheck } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";

// Custom-Hook
import { useCart } from "context/CartContext";
// Module
import BookCard from "components/module/BookCard";
import Warning from "components/module/Warning";
// utils
import { sp } from "utils/common";

const CartPage = () => {
  const [state] = useCart();
  const { selectedItems, itemsCounter, total } = state;

  return (
    <div className="lg:flex-row flex flex-col gap-4">
      <div className="basis-10/12 flex flex-col gap-4">
        {selectedItems.length ? (
          selectedItems.map((book) => (
            <BookCard key={book._id} type={true} book={book} />
          ))
        ) : (
          <Warning text="هنوز محصولی را به سبد خرید اضافه نکرده اید !!!" />
        )}
      </div>
      <div className="basis-2/12 border-2 border-dashed border-blue-600 flex flex-col gap-14 p-4 rounded">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <MdFactCheck className="text-xl text-blue-600" />
              تعداد محصولات:
            </span>
            {itemsCounter}
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <FaMoneyBillWave className="text-xl text-green-600" />
              قیمت کل:
            </span>
            {sp(total)}
          </div>
        </div>

        <Link
          to={`${itemsCounter ? "/payment" : "#"}`}
          className={`${
            itemsCounter
              ? "opacity-5100 cursor-pointer"
              : "opacity-50 cursor-no-drop"
          } bg-blue-600 hover:bg-blue-700 rounded text-white px-1 w-full text-center`}
        >
          پرداخت
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
