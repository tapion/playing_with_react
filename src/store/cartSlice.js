import { createSlice } from "@reduxjs/toolkit";
import store from ".";

const itemIndex = (itemList, newItem) => {
  return itemList.findIndex((item) => item.title === newItem.title);
};

const updateQuantity = (price, amount) => price * amount;

const cartSlice = createSlice({
  name: "cart",
  initialState: { showCart: false, items: [] },
  reducers: {
    add(store, action) {
      const newItem = action.payload;
      const index = itemIndex(store.items, newItem);
      if (index >= 0) {
        store.items[index].quantity ++;
        store.items[index].total = updateQuantity(store.items[index].price, store.items[index].quantity);
      } else {
        store.items.push(action.payload);
      }
    },
    decrease(store, action) {
        const newItem = action.payload;
        const index = itemIndex(store.items, newItem);
        if(store.items[index].quantity === 1){
            store.items = store.items.filter(item => item.title !== store.items[index].title);
        }else {
            store.items[index].quantity --;
            store.items[index].total = updateQuantity(store.items[index].price, store.items[index].quantity);
        }
    },
    increase(store, action) {
        const newItem = action.payload;
        const index = itemIndex(store.items, newItem);
        store.items[index].quantity ++;
        store.items[index].total = updateQuantity(store.items[index].price, store.items[index].quantity);;
    },
    toggleCartList(store) {
        console.log('llego ',store.showCart);
        store.showCart = !store.showCart;
        console.log('Termino ',store.showCart);
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
