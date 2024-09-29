import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';

interface CartObject {
  title: string;
  price: string;
  qty: number;
  img?: string;
}

// Initial State
const initialState: Array<CartObject> = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add to cart
    addCart: (state, action: PayloadAction<CartObject>) => {
      const existingItem = state.find(
        item => item.title === action.payload.title,
      );

      if (existingItem) {
        // Update quantity if the item exists
        existingItem.qty += action.payload.qty;
      } else {
        // Add new item if it doesn't exist
        state.push(action.payload);
      }
    },

    // Remove from cart
    removeCart: (state, action: PayloadAction<CartObject>) => {
      const existingItem = state.find(
        item => item.title === action.payload.title,
      );
      if (existingItem) {
        if (existingItem.qty > 1) {
          existingItem.qty -= 1;
        } else {
          return state.filter(item => item.title !== action.payload.title);
        }
      }
    },
  },
});

// Export actions
export const {addCart, removeCart} = cartSlice.actions;

// Selector to get cart items from state
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
