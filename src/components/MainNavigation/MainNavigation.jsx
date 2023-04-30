import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const loginData = useSelector((state) => state.login);

  const checkScrollY = () => {
    if (window.scrollY >= 100) setIsScrolled(true);
    else setIsScrolled(false);
  };

  const logoutHandler = () => {
    const data = JSON.parse(localStorage.getItem("user_accounts"));
    const index = data.findIndex((item) => item.email === loginData.info.email);
    data[index] = { ...data[index], isLogin: false };
    localStorage.setItem("user_accounts", JSON.stringify(data));
    dispatch(loginActions.logout());
    navigate("/");
  };

  window.addEventListener("scroll", checkScrollY);

  return (
    <nav className={`${classes.nav} ${isScrolled && classes.scroll}`}>
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
            to="/shop?type=all"
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
        {loginData.isLogin || (
          <span>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <i class="fa-solid fa-user"></i>
              &nbsp;Login
            </NavLink>
          </span>
        )}
        {loginData.isLogin && (
          <span>
            <span>
              <i class="fa-solid fa-user"></i>
              <span>{loginData.info.full_name}</span>
            </span>
            <button
              className={classes.btn}
              onClick={logoutHandler}
            >
              (Log out)
            </button>
          </span>
        )}
      </section>
    </nav>
  );
};

export default MainNavigation;
