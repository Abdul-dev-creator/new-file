import React from "react";
import "./Body.css";
import backgroundImage from "../assets/background.jpg";

function Body() {
  return (
    <div
      id="overlay"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundSize: "cover",
        marginTop:'10px'
        
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: "20%",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: "bold",
          fontSize: '30px'
        }}
      >
        {" "}
        Place Your Order with us and{" "}
        <span
          style={{
            color: "#FFC507",
            background: "brown",
            padding: "10px 15px",
            borderRadius: "8px",
          }}
        >
          Enjoy 30% on your first Order
        </span>
      </h1>

      <div className="order">
      <input type="button" value="Order" className="order" style={{marginLeft:'48%', padding:'10px 30px', borderRadius:'10px',  fontSize:'25px', marginTop:'20px', fontFamily:"Arial, Helvetica, sans-serif", fontWeight:'bold', color:'white'}} />
      </div>
    </div>
  );
}

export default Body;
