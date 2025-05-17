// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

//create the slice
const productSlice = createSlice({
    name: 'Products',
    initialState:{
        Veg: [
  { name: 'Fresh Tomato', price: 50.5, image: '/Images/VegTomato.png' },
  { name: 'Potato', price: 60.5, image: '/Images/VegPotato.png' },
  { name: 'Pumpkin', price: 100.5, image: '/Images/VegPumpkin.png' },
  { name: 'Onion', price: 55.5, image: '/Images/VegOnion.png' },
  { name: 'Lime', price: 10.5, image: '/Images/VegLime.png' },
  { name: 'Leady Finger', price: 40.5, image: '/Images/VegLeadyFinger.png' },
  { name: 'Green Lettuce', price: 200.5, image: '/Images/VegGreenLettuce.png' },
  { name: 'Egg Plant', price: 65.5, image: '/Images/VegeggPlant.png' },
  ...
]

    },
    reducers:{}
});
// Cart slice with AddToCart and IncCart functionality
const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    AddToCart: ((state, inputItem) => {
      let item = state.find(item => item.name === inputItem.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...inputItem.payload, quantity: 1 });
      }
    }),
    IncCart: ((state, inputItem) => {
      let item = state.find(item => item.name === inputItem.payload.name);
        item.quantity += 1;
    }),
    DecCart: ((state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // If quantity is 1 and user clicks '-', remove the item from cart
          return state.filter(i => i.name !== item.name);
        }
      }
      return state;
    }),
    RemoveCart: ((state, inputItem) => {
      return state.filter(i => i.name !== inputItem.payload.name)
    }),
    ClearCart: (() => []),
  }
});

let orderSlice = createSlice ({
  name:'orders',
  initialState : [],
  reducers:{
            orderDetails : ((state, action) =>{
              state.push(action.payload);
            }),
          }
});

// Export actions
export const { AddToCart, IncCart , DecCart, RemoveCart, ClearCart } = CartSlice.actions;
export const { setProducts } = productSlice.actions;
export const {orderDetails} = orderSlice.actions;

// Configure store with both reducers
const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    Cart: CartSlice.reducer, 
    orders: orderSlice.reducer,
  }
});

export default store;
