import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div style={{position: 'fixed', right: 0, top: 0, width: '300px', backgroundColor: '#f8f8f8', padding: '20px', height: '100vh', overflowY: 'auto' }}>
    <h3>Cart 🛒</h3>
    {
      cart.length === 0 ? ( <p>Cart is Empty</p> ):
      (
        cart.map((item) =>(
          <div key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.price}</p>
            <button onClick={()=>removeFromCart(item.id)}>Delete</button>
          </div>
        ))
      ) 
    }
    </div>
  );
};

export default Cart;
