"use client";

// Redux
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  remove,
} from "@/redux/features/carditems/cardSlice";
// React-Icons
import { BsTrash3Fill } from "react-icons/bs";

const Left = ({selected}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center basis-3/12">
      <div className="flex">
        <button
          onClick={() => dispatch(increment(selected))}
          className="rounded-r-md h-10 w-10 font-bold text-white bg-blue-500 hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={() => dispatch(remove(selected))}
          className="h-10 w-10 flex justify-center items-center text-white bg-red-500 hover:bg-red-600"
        >
          <BsTrash3Fill />
        </button>
        <button
          onClick={() => dispatch(decrement(selected))}
          className="rounded-l-md h-10 w-10 font-bold text-white bg-blue-500 hover:bg-blue-600"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Left;
