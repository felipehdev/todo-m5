import React from "react";
import S from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={S.navbar}>              
      <h1 className={S.title} text='To Do'> {props.text}</h1>
    </nav>
  );
};

export default Navbar;
