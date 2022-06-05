import React from "react";
import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="menu">
      <Link to="/home" className="menu__link">
        home
      </Link>
      <Link to="/marvelComics" className="menu__link menu__link--marvel">
        comics
      </Link>

      <Link to="/shop" className="menu__link">
        shop
      </Link>
      <Link to="/login" className="menu__link">
        login
      </Link>
      <Link to="/adminComics" className="menu__link">
        adminComics
      </Link>
      <Link to="/adminShop" className="menu__link">
        adminShop
      </Link>

      <div>
        <a href="#" className="BiCartAlt">
          <BiCartAlt />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
