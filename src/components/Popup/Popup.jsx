import React from "react";
import ReactDOM from "react-dom";
import classes from "./Popup.module.css";
import { useDispatch } from "react-redux";
import { popupActions } from "../../store/popup";
import { Link } from "react-router-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  console.log(props)
  return (
    <main className={classes.modal}>
      <picture>
        <img src={props.img1} alt={props.name} width='100%'/>
      </picture>
      <section>
        <h2 className={classes.head}>
          <i>{props.name}</i>
        </h2>
        <p className={`${classes.silver} ${classes.price}`}>
          <i>{props.price} VND</i>
        </p>
        <p className={`${classes.silver} ${classes.desc}`}>
          <i>{props.short_desc}</i>
        </p>
        <Link to={`/detail?id=${props._id.$oid}`} className={classes.button}>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          &nbsp;View Detail
        </Link>
      </section>
      <button className={classes.close} onClick={props.onClick}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </main>
  );
};

const Popup = (props) => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(popupActions.close());
  };
  
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeModalHandler} />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} onClick={closeModalHandler} />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Popup;
