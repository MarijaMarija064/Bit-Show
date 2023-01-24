import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header id="header" className="py-3">
      <Link to="/">
        <h1 className="text-center">BIT Shows</h1>
      </Link>
    </header>
  );
};

export default Header;
