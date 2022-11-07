import './App.css';
import Accessories from './components/Accessories';
import Nav from './components/Nav';
import {Routes , Route} from "react-router-dom"
import Home from './components/Home';
import Cart from './Cart';
import {CartProvider} from "react-use-cart"
import { useState } from 'react';
import Checkout from './components/checkout';
import {Link } from "react-router-dom";
import SignUp from './components/sineUp';
import Login from './components/login';

function App() {
  const [cart , setCart] = useState(false);
  return (
    <div className="App">
      <Link to="/cart"><button onClick={()=>setCart(true)} className='btn btn-outline-primary , cart'><i class="fa-solid fa-cart-arrow-down"></i>cart</button></Link>
      <Link to="/signUp"><button type="button" class="btn btn-outline-primary" style={{ position: "relative", left: "-116px", top:"48px" }}><i class="fa-solid fa-cash-register"></i> signUp</button></Link>
      <Link to="/Login"><button
        type="button"
        class="btn btn-outline-primary"
        style={{ position: "relative", left: "-310px", top:"48px" }}
      >
        <i class="fa-solid fa-arrow-right-to-bracket"></i> Login
      </button></Link>
      <CartProvider>
      <Nav/>
      <Routes>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
        {cart? (<Route path="/cart" element={<Cart/>}/>): null}
      <Route path='/' element={<Home/>}/>
      <Route path='/store/Accessories'  element={<Accessories/>}/>
      <Route path='/buynow' element={<Checkout/>}/>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
