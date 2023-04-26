import React, { useEffect, useState } from "react";
import classes from "./Products.module.css";
import { useDispatch } from "react-redux";
import { popupActions } from "../../store/popup-slice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );

        if (!response.ok) throw new Error("Something went wrong!");

        const data = await response.json();
        const fixData = data.map((product) => {
          let priceArr = product.price.split("");
          const length = priceArr.length;
          const indexFix = [3, 6, 9, 12];
          for (const index of indexFix)
            if (index < length) priceArr.splice(length - index, 0, ".");
          return { ...product, price: priceArr.join("") };
        });

        setProducts(fixData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <menu className={classes.menu}>
      {products.map((product) => (
        <div key={product._id.$oid}>
          <div className={classes.img} onClick={() => dispatch(popupActions.open(product))}>
            <img src={product.img1} alt={product.name} width="100%" />
          </div>
          <p className={classes.center}>
            <b>
              <i>{product.name}</i>
            </b>
          </p>
          <p className={`${classes.center} ${classes.blur}`}>
            <i>{product.price} VND</i>
          </p>
        </div>
      ))}
    </menu>
  );
};

export default Products;
