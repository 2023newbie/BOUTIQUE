import React from "react";
import classes from "./CategoriesList.module.css";
import { Link } from "react-router-dom";

const CategoriesList = ({path}) => {
  const root = 'https://asm3-nodejs-f00e5645d891.herokuapp.com/'

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
          <img src={`${root}${path.iphone}`} alt="iphone" width="100%" />
        </Link>
        <Link to="/shop?type=mac" className={`${classes.mac} ${classes.hover}`}>
          <img src={`${root}${path.mac}`} alt="mac" width="100%" />
        </Link>
        <Link to="/shop?type=ipad" className={`${classes.ipad} ${classes.hover}`}>
          <img src={`${root}${path.ipad}`} alt="ipad" width="100%" />
        </Link>
        <Link to="/shop?type=watch" className={`${classes.watch} ${classes.hover}`}>
          <img src={`${root}${path.watch}`} alt="watch" width="100%" />
        </Link>
        <Link to="/shop?type=airpod" className={`${classes.airpods} ${classes.hover}`}>
          <img src={`${root}${path.airpods}`} alt="airpods" width="100%" />
        </Link>
      </menu>
    </section>
  );
};

export default CategoriesList;
