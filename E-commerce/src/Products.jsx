import React from "react";
import Cart from "./Cart";


const Products = ({ value, addtocart }) => {
  return (
    <div>
      <div
        style={{
          padding: "20px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h2>Product List</h2>
      </div>

      <div
      style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            padding: "24px",
            width: "calc(100% - 320px)",
            boxSizing: "border-box",
        }}

      >
        {value.map((product) => (
          <div
            key={product.id}
            style={{
                    maxWidth: "240px",
                    minWidth: "200px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    margin: "0 auto",
                }}

          >
            <h3>{product.title}</h3>
            <img src={product.image}  alt="" 
               style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "4px",
                    }}
            />

            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating.rate}</p>
            <button
             onClick={()=>{addtocart(product)}}
            
              style={{
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
