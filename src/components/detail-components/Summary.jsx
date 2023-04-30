import React from "react";
import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <figure className={classes.summary}>
      <section className={classes.picture}>
        <picture className={classes.small_picture}>
          <img src={props.img1} alt={props.name} width='100%' />
          <img src={props.img2} alt={props.name} width='100%' />
          <img src={props.img3} alt={props.name} width='100%' />
          <img src={props.img4} alt={props.name} width='100%' />
        </picture>
        <picture>
          <img src={props.img1} alt={props.name} width='100%' />
        </picture>
      </section>
      <section className={classes.info}>
        <h1>{props.name}</h1>
        <p className={classes.price}>{props.price} VND</p>
        <p className={classes.desc}>{props.short_desc}</p>
        <p className={classes.category}>
          <b>CATEGORY:</b> <span>&nbsp;{props.category}</span>
        </p>
        <form className={classes.form}>
          <label htmlFor="quantity">quantity</label>
          <input id="quantity" type="number" defaultValue={1} min={1} />
          <button>Add to cart</button>
        </form>
      </section>
    </figure>
  );
};

export default Summary;
