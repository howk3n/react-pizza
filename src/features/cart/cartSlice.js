import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload is new cart item
      state.cartItems.push(action.payload);
    },
    deleteItem: (state, action) => {
      // payload is id
      state.cartItems = state.cartItems.filter(
        (item) => item.pizzaId !== action.payload
      );
    },
    increaseItemQuantity: (state, action) => {
      const itemToUpdate = state.cartItems.find(
        (item) => item.pizzaId === action.payload
      );
      itemToUpdate.quantity++;
      itemToUpdate.totalPrice += itemToUpdate.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      const itemToUpdate = state.cartItems.find(
        (item) => item.pizzaId === action.payload
      );
      if (itemToUpdate.quantity === 1)
        cartSlice.caseReducers.deleteItem(state, action);
      else {
        itemToUpdate.quantity--;
        itemToUpdate.totalPrice -= itemToUpdate.unitPrice;
      }
    },
    clearCart: (state) => {
      state.cartItems = initialState.cartItems;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cartItems;

// 'reselect' library for performance issues

export const getTotalCartPrice = (state) =>
  state.cart.cartItems.reduce(
    (acc, item) => (acc += item.quantity * item.unitPrice),
    0
  );

export const getTotalCartQuantity = (state) =>
  state.cart.cartItems.reduce((acc, item) => (acc += item.quantity), 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cartItems.find((item) => item.pizzaId === id)?.quantity ?? 0;
