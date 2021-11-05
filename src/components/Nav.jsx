import React from "react";
import Logo from "../weather app.jpg";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="navBar">
      <img src={Logo} alt="img not found" />
      <span>Weather app </span>
      <SearchBar onSearch={onSearch} onClose={onclose} />
    </div>
  );
}

export default Nav;
