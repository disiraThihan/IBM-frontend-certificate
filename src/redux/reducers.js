import {
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
} from "./actions";

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    }

    case INCREMENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalItems: state.totalItems + 1,
        totalPrice:
          state.totalPrice +
          state.cart.find((item) => item.id === action.payload).price,
      };

    case DECREMENT_ITEM: {
      const itemToDecrement = state.cart.find(
        (item) => item.id === action.payload
      );

      if (itemToDecrement.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - itemToDecrement.price,
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - itemToDecrement.price,
        };
      }
    }

    case REMOVE_ITEM: {
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice:
          state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
