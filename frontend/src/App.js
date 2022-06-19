import React, { useState, useEffect } from 'react';
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Checkout from "./components/Checkout";
import Invoice from "./components/Invoice";
import  Axios  from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';






const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  useEffect(()=> { 
    Axios.get('http://localhost:3001/').then((response)=>{
      setShow(response.data)
    })
   },[])
  


  return (
    <div>
     
     <BrowserRouter>
     <Navbar size={cart.length} />
     <Routes>
       <Route path="/" element={<Amazon handleClick={handleClick} />} />
       <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
       <Route path="/checkout" element={<Checkout cart={cart} />} />
     </Routes>
   </BrowserRouter>
  
  <BrowserRouter>
  <Routes>
  <Route path="/invoice" element={<Invoice />} />
    </Routes>
  </BrowserRouter>
  </div>
  
  
    


  );
};

export default App;
