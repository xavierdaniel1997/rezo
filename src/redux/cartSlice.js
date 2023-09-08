import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // state.items.push(action.payload)
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += 1; // Increment the count of the existing item
      } else {
        state.items.push({...newItem, count: 1}); // Add the new item with a count of 1
      }
    },
    removeItem: (state, action) => {
        const itemId = action.payload;
        state.items = state.items.filter((item) => item.card.info.id !== itemId);
    },
    removeItemQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === itemId
      );

      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].count > 1) {
          state.items[existingItemIndex].count -= 1; // Decrement the count if count > 1
        } else {
          state.items.splice(existingItemIndex, 1); // Remove the item if count is 1
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {addItem, removeItem, removeItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
