// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

//create the slice
const productSlice = createSlice({
    name: 'Products',
    initialState:{
        Veg:[
            {name:'Fresh Tomato', price:50.5, image:'public/Images/VegTomato.png'},
            {name:'Potato', price:60.5, image:'public/Images/VegPotato.png'},
            {name:'Pumpkin', price:100.5, image:'public/Images/VegPumpkin.png'},
            {name:'Onion', price:55.5, image:'public/Images/VegOnion.png'},
            {name:'Lime', price:10.5, image:'public/Images/VegLime.png'},
            {name:'Leady Finger', price:40.5, image:'public/Images/VegLeadyFinger.png'},
            {name:'Green Lettuce', price:200.5, image:'public/Images/VegGreenLettuce.png'},
            {name:'Egg Plant', price:65.5, image:'public/Images/VegeggPlant.png'},
            {name:'Cucumber', price:45.5, image:'public/Images/VegCucumber.png'},
            {name:'Corn', price:100.5, image:'public/Images/VegCorn.png'},
            {name:'Coliflower', price:150.5, image:'public/Images/VegColiflower.png'},
            {name:'Brocoli', price:500.5, image:'public/Images/VegBrocoli.png'},
            {name:'Avacodo', price:850.5, image:'public/Images/VegAvacodo.png'},
            {name:'Celery', price:150.5, image:'public/Images/Veg Celery.png'},
            {name:'Purple sweet Potato', price:350.5, image:'public/Images/Veg Purple sweet Potato.png'},
            {name:'Radish', price:157.5, image:'public/Images/Veg Radish.png'},
            {name:'Shallots', price:597.5, image:'public/Images/Veg Shallots.png'},
            {name:'Spinach', price:845.5, image:'public/Images/Veg Spinach.png'},
            {name:'Zucchini', price:625.5, image:'public/Images/Veg Zucchini.png'},
            {name:'Cabbage', price:732.5, image:'public/Images/VegCabbage.png'},
            {name:'Collard Greens', price:325.5, image:'public/Images/VegCollard Greens.png'},
            {name:'Jicama', price:155.5, image:'public/Images/VegJicama.png'},
            {name:'Kale', price:850.5, image:'public/Images/VegKale.png'},
            ],
        NonVeg:[
            {name:'Chicken Breast', price:100.5, image:'public/Images/NonChickenBreast.png'},
            {name:'Crab Legs', price:500.5, image:'public/Images/NonCrabLegs.png'},
            {name:'Fish Eggs', price:1000.5, image:'public/Images/NonFishEggs.jpg'},
            {name:'Pork Belly', price:260.5, image:'public/Images/NonPorkBelly.jpg'},
            {name:'Salmon', price:1500.5, image:'public/Images/NonSalmon.jpg'},
            {name:'Shrimp', price:200.5, image:'public/Images/NonShrimp.jpg'},
            {name:'Bheja Masala', price:750.5, image:'public/Images/Non veg Bheja Masala.png'},
            {name:'Chicken Chettinad', price:800.5, image:'public/Images/Non veg Chicken Chettinad.png'},
            {name:'Kankada Jhola', price:950.5, image:'public/Images/Non veg Kankada Jhola.png'},
            {name:'Keema Matar', price:250.5, image:'public/Images/Non veg Keema Matar.png'},
            {name:'Kimchi', price:350.5, image:'public/Images/Non veg Kimchi.png'},
            {name:'Laal Maas', price:645.5, image:'public/Images/Non veg Laal Maas.png'},
            {name:'Murgh Musallam', price:395.5, image:'public/Images/Non veg Murgh Musallam.png'},
            {name:'MuttonCurry', price:725.5, image:'public/Images/Non veg MuttonCurry.png'},
            {name:'NonBacon', price:500.5, image:'public/Images/Non veg NonBacon.jpg'},
            {name:'NonBeef', price:200.5, image:'public/Images/Non veg NonBeef.png'},
            {name:'paya soup', price:950.5, image:'public/Images/Non veg paya soup.png'},
            {name:'Pork Vindaloo', price:650.5, image:'public/Images/Non veg Pork Vindaloo.png'},
            {name:'Rogan Josh', price:345.5, image:'public/Images/Non veg Rogan Josh.png'},
            {name:'Sarson Machhi', price:255.5, image:'public/Images/Non veg Sarson Machhi.png'},
            {name:'Steamed Garlic Prawns', price:280.5, image:'public/Images/Non veg Steamed Garlic Prawns.png'},
            {name:'Tunde Kebab', price:370.5, image:'public/Images/Non veg Tunde Kebab.png'},
            {name:'butter chicken', price:900.5, image:'public/Images/Non vegbutter chicken.png'},
            {name:'Chicken Tikka', price:1000.5, image:'public/Images/Non vegChicken Tikka.png'},
            {name:'Egg Curry', price:250.5, image:'public/Images/Non vegEgg Curry.png'},
            {name:'Haleem', price:650.5, image:'public/Images/Non vegHaleem.png'},
            {name:'Poora Haah', price:950.5, image:'public/Images/Non vegPoora Haah.png'},
            {name:'Rista', price:150.5, image:'public/Images/Non vegRista.png'},
            
        ],
        Milk:[
            {name:'Butter Milk', price:90.5, image:'public/Images/ButterMilk.jpeg'},
            {name:'Milk 1Kg', price:80.5, image:'public/Images/Milk.jpeg'},
            {name:'Sweet Curd', price:20.5, image:'public/Images/MilkCurd.jpeg'},
            {name:'Normal Curd', price:15.5, image:'public/Images/MilkCurd.jpeg'},
            {name:'Fresh Malai', price:400.5, image:'public/Images/MilkFreshMalai.jpeg'},
            {name:'Ghee', price:500.5, image:'public/Images/MilkGhee.jpeg'},
            {name:'Ice Cream', price:60.5, image:'public/Images/MilkIceCream.jpeg'},
            {name:'Mozzarella Cheese', price:300.5, image:'public/Images/MilkMozzarella.jpeg'},
            {name:'Fresh Paneer', price:180.5, image:'public/Images/MilkPaneer.jpeg'},
            {name:'Milk Powder', price:550.5, image:'public/Images/MilkPowder.jpeg'},
            {name:'Sandwich Cheese Slice', price:50.5, image:'public/Images/MilkSandwichCheeseSlice.jpeg'},
            {name:'Milk Powder', price:550.5, image:'public/Images/MilkPowder.jpeg'},
            {name:'Milkshake', price:300.5, image:'public/Images/Milkshake.png'},
            {name:'Milk Coffee', price:450.5, image:'public/Images/Milk Coffee.png'},
            {name:'Milk Brie', price:650.5, image:'public/Images/Milk Brie.png'},
            {name:'Milk Butter', price:750.5, image:'public/Images/Milk Butter.png'},
            {name:'Milk Buttermilk', price:550.5, image:'public/Images/Milk Buttermilk.png'},
            {name:'Milk Camembert', price:325.5, image:'public/Images/Milk Camembert.png'},
            {name:'Milk Cheese', price:475.5, image:'public/Images/Milk Cheese.png'},
            {name:'Milk Cottage-cheese', price:150.5, image:'public/Images/Milk Cottage-cheese.png'},
            {name:'Milk Cream', price:100.5, image:'public/Images/Milk Cream.png'},
            {name:'Milk Custard', price:800.5, image:'public/Images/Milk Custard.png'},
            {name:'Milk Daliah', price:950.5, image:'public/Images/Milk Daliah.png'},
            {name:'Milk Feta', price:850.5, image:'public/Images/Milk Feta.png'},
            {name:'Milk Ice-cream', price:120.5, image:'public/Images/Milk Ice-cream.png'},
            {name:'Milk Kefir', price:750.5, image:'public/Images/Milk Kefir.jpg'},
            {name:'Milk Khoya', price:820.5, image:'public/Images/Milk Khoya.png'},
            {name:'Milk Kulfi', price:980.5, image:'public/Images/Milk Kulfi.png'},
            {name:'Milk Soft-cheese', price:640.5, image:'public/Images/Milk Soft-cheese.png'},
            {name:'Milk Tea', price:50.5, image:'public/Images/Milk Tea.png'},
            
        ],
        Chocolate:[
            {name:'Chocolate Cake', price:90.5, image:'public/Images/ChocolateCake.jpeg'},
            {name:'Chocolate Candy', price:80.5, image:'public/Images/ChocolateCandy.jpeg'},
            {name:'Chocolate Cookies ', price:20.5, image:'public/Images/ChocolateCookies.jpg'},
            {name:'Chocolate Donut', price:150.5, image:'public/Images/ChocolateDonut.jpg'},
            {name:'Chocolate Gift Box', price:415.5, image:'public/Images/ChocolateGiftBox.jpeg'},
            {name:'Chocolate One Layer Cake', price:50.5, image:'public/Images/ChocolateOneLayerCake.jpeg'},
            {name:'Chocolate Pastry', price:60.5, image:'public/Images/ChocolatePastry.jpg'},
            {name:'Chocolate Protin Bar', price:300.5, image:'public/Images/ChocolateProtinBar.jpeg'},
            {name:'chocolate Aero Bar', price:280.5, image:'public/Images/chocolate Aero.png'},
            {name:'chocolate Almond Ice Cream', price:80.5, image:'public/Images/chocolate Almond Ice Cream.png'},
            {name:'chocolate Biscuits', price:180.5, image:'public/Images/chocolate Biscuits.png'},
            {name:'chocolate Chip Ice Cream', price:250.5, image:'public/Images/chocolate Chip Ice Cream.png'},
            {name:'chocolate Covered Cube', price:50.5, image:'public/Images/chocolate Covered Bananas.png'},
            {name:'chocolate Covered Strawberries', price:500.5, image:'public/Images/chocolate Covered Strawberries.png'},
            {name:'chocolate Dark', price:400.5, image:'public/Images/chocolate Dark.png'},
            {name:'chocolate Fudge Cube (per Piece)', price:10.5, image:'public/Images/chocolate Fudge.png'},
            {name:'chocolate Hot Fudge Sundae', price:800.5, image:'public/Images/chocolate Hot Fudge Sundae.png'},
            {name:'chocolate Milk', price:180.5, image:'public/Images/chocolate Milk.png'},
            {name:'chocolate Muffin', price:140.5, image:'public/Images/chocolate Muffin.png'},
            {name:'chocolate Nests', price:700.5, image:'public/Images/chocolate Nests.png'},
            {name:'chocolate Pie', price:1200.5, image:'public/Images/chocolate Pie.png'},
            {name:'chocolate Pudding', price:40.5, image:'public/Images/chocolate Pudding.png'},
            {name:'chocolate Raisins', price:10.5, image:'public/Images/chocolate Raisins.png'},
            {name:'chocolate Rolo', price:1080.5, image:'public/Images/chocolate Rolo.png'},
            {name:'chocolate Souffle', price:90.5, image:'public/Images/chocolate Souffle.png'},
            {name:'chocolate Truffles', price:10.5, image:'public/Images/chocolate Truffles.png'},
            {name:'chocolate Volcano', price:1500.5, image:'public/Images/chocolate Volcano.png'},
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
