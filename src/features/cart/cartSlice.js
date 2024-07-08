import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
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
      if (itemToUpdate.quantity > 0) {
        itemToUpdate.quantity--;
        itemToUpdate.totalPrice -= itemToUpdate.unitPrice;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.pizzaId !== action.payload
        );
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
