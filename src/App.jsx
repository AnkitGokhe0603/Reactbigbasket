// App.js
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './Color.css';
import NotFound from './NotFound'; // ✅ Proper import
import Veg from './Veg';
import Home from './Home';
import Chocolate from './Chocolate';
import ContactUs from './contactUs';
import Order from './order';
import Signing from './signing';
import AboutUs from './AboutUs';
import Cart from './Cart';
import Milk from './milk';
import NonVegItems from './NonVegItems';
import { useSelector } from 'react-redux';

function App() {
  const cartObject = useSelector(globalState => globalState.Cart);
  const totalCartCount = cartObject.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="brand">Big Basket</div>
        <div className="nav-links">
          <Link to='/' className="nav-link home">Home</Link>
          <Link to='/NonVeg' className="nav-link nonveg">Nonveg Item</Link>
          <Link to='/veg' className="nav-link veg">Veg Item</Link>
          <Link to='/Milk' className="nav-link milk">Milk</Link>
          <Link to='/Chocolate' className="nav-link chocolate">Chocolate</Link>
          <Link to='/Cart' className="nav-link cart">Cart ({totalCartCount})</Link>
          <Link to='/Order' className="nav-link order">Order</Link>
          <Link to='/Signing' className="nav-link signing">Signing</Link>
          <Link to='/AboutUs' className="nav-link aboutus">About Us</Link>
          <Link to='/ContactUs' className="nav-link contactus">Contact Us</Link>
        </div>
      </nav>

      <div className="page-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/NonVeg' element={<NonVegItems />} />
          <Route path='/veg' element={<Veg />} />
          <Route path='/Milk' element={<Milk />} />
          <Route path='/Chocolate' element={<Chocolate />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/Signing' element={<Signing />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} /> {/* ✅ Catch-all route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
