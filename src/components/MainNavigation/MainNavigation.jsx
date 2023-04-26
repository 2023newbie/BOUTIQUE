import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const checkScrollY = () => {
    if (window.scrollY >= 100) 
      setIsScrolled(true);
    else 
      setIsScrolled(false);
  };

  window.addEventListener("scroll", checkScrollY);

  return (
    <nav className={`${classes.nav} ${(isScrolled && classes.scroll)}`}>
      <section>
        <span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
          <i class="fa-solid fa-house"></i>
          &nbsp;Home
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
          <i class="fa-brands fa-apple"></i>
            &nbsp;Shop
          </NavLink>
        </span>
      </section>
      <section>
        <span className={classes.logo}>BOUTIQUE</span>
      </section>
      <section>
        <span>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
          <i class="fa-solid fa-cart-flatbed"></i>
          &nbsp;Cart
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
          <i class="fa-solid fa-user"></i>
          &nbsp;Login
          </NavLink>
        </span>
      </section>
    </nav>
  );
};

export default MainNavigation;
