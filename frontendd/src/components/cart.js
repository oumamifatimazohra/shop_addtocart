import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { Link } from "react-router-dom";

import Checkout from "./Checkout";









const Cart = ({ cart, setCart, handleChange }) => {
   



 
  
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });


  
 
  return (
    
    <article>
    {cart.map((item) => (
       
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
       <span>Total Price of your Cart</span>
       <span>$ - {price}</span>  
      </div>
      
       <div className="checkout">
         <div>
         <h4><span className="title">Sub Total:</span>
         <span>$ {price}</span>
         </h4>
         </div>
         <div>
           <h4><span className="title">Grand Total:</span>
           <span>$ {price}</span>
          </h4>
         </div>
         <br/>
       
          <Link className="checkout-btn" to="/checkout">           
           <button onClick={() => Checkout()}>Checkout</button>
          </Link>
         
           
        
       </div>
      
    </article>
    
    
  );
};

export default Cart;

