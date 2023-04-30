import React from "react";
import classes from "./ListCategories.module.css";
import { Link } from "react-router-dom";

const ListCategories = () => {
  return (
    <section className={classes.categories}>
      <p className={classes.sub_head}>
        <i>CAREFULLY CREATED COLLECTIONS</i>
      </p>
      <h2 className={classes.heading}>
        <i>BROWSE OUR CATEGORIES</i>
      </h2>
      <menu className={classes.menu}>
        <Link to="/shop?type=iphone" className={`${classes.iphone} ${classes.hover}`}>
          <img src="./img/product_1.png" alt="iphone" width="100%" />
        </Link>
        <Link to="/shop?type=mac" className={`${classes.mac} ${classes.hover}`}>
          <img src="./img/product_2.png" alt="mac" width="100%" />
        </Link>
        <Link to="/shop?type=ipad" className={`${classes.ipad} ${classes.hover}`}>
          <img src="./img/product_3.png" alt="ipad" width="100%" />
        </Link>
        <Link to="/shop?type=watch" className={`${classes.watch} ${classes.hover}`}>
          <img src="./img/product_4.png" alt="watch" width="100%" />
        </Link>
        <Link to="/shop?type=airpod" className={`${classes.airpods} ${classes.hover}`}>
          <img src="./img/product_5.png" alt="airpods" width="100%" />
        </Link>
      </menu>
    </section>
  );
};

export default ListCategories;
