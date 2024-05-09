import { createContext, useContext, useReducer } from "react";
import { sumPrudocts } from "utils/common";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (
        !state.selectedItems.find((i) => i.isbn13 === action.payload.isbn13)
      ) {
        state.selectedItems.push({ ...action.payload, qty: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        ...sumPrudocts(state.selectedItems),
        checkout: false,
      };
    case "REMOVE":
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.isbn13 !== action.payload.isbn13
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumPrudocts(newSelectedItems),
        checkout: false,
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (i) => i.isbn13 === action.payload.isbn13
      );
      state.selectedItems[indexI].qty++;
      return {
        ...state,
        ...sumPrudocts(state.selectedItems),
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (i) => i.isbn13 === action.payload.isbn13
      );
      state.selectedItems[indexD].qty--;
      return {
        ...state,
        ...sumPrudocts(state.selectedItems),
      };

    default:
      throw new Error("Invalid Action !!!");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
