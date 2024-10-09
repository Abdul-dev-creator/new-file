import React from "react";
import logo from "../assets/delivery_truck_005.jpg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar ">
      <div className="Side">
        <img className="pic" src={logo} alt="" />
        <h3>Thunder</h3>
      </div>
      <div style={{ display: "flex ", gap: "30px", fontWeight: "bold" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Order/">Order</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
     
      <button class="button type1"></button>
    </div>
  );
}

export default Navbar;
