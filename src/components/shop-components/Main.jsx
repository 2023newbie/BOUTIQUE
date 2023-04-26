import React from "react";
import classes from "./Main.module.css";
import Aside from "./Aside";
import ProductsShop from "./ProductsShop";

const Main = () => {
  return (
    <main className={classes.main}>
      <Aside />
      <ProductsShop />
    </main>
  );
};

export default Main;
