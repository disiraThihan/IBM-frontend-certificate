export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addToCart = (plant) => ({
  type: ADD_TO_CART,
  payload: plant,
});

export const incrementItem = (id) => ({
  type: INCREMENT_ITEM,
  payload: id,
});

export const decrementItem = (id) => ({
  type: DECREMENT_ITEM,
  payload: id,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});
