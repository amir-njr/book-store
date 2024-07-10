// React-Router-Dom
import { Link } from "react-router-dom";

// React-Icon
import { FaCartShopping } from "react-icons/fa6";

const CounterBook = ({ itemsCounter }) => {
  return (
    <Link to="/cart">
      <div className="relative opacity-80 hover:opacity-100">
        <span className="absolute top-[-12px] right-[-15px] bg-blue-600 text-white w-4 h-4 flex items-center justify-center p-3 rounded-full">
          {itemsCounter}
        </span>
        <FaCartShopping className="text-2xl" />
      </div>
    </Link>
  );
};

export default CounterBook;
