import { useState } from 'react'
import classes from './Summary.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart'

const Summary = props => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const email = useSelector(store => store.login.info.email)
  
  const addProductToCart = e => {
    e.preventDefault()
    dispatch(cartActions.ADD_CART({prod: { ...props, qty: quantity}, email: email}))
  }

  const increaseQty = () => {
    setQuantity(prevState => ++prevState)
  }

  const decreaseQty = () => {
    setQuantity(prevState => {
      if (prevState > 1) {
        --prevState
      }
      return prevState
    })
  }

  return (
    <figure className={classes.summary}>
      <section className={classes.picture}>
        <picture className={classes.small_picture}>
          <img src={props.img1} alt={props.name} width="100%" />
          <img src={props.img2} alt={props.name} width="100%" />
          <img src={props.img3} alt={props.name} width="100%" />
          <img src={props.img4} alt={props.name} width="100%" />
        </picture>
        <picture>
          <img src={props.img1} alt={props.name} width="100%" />
        </picture>
      </section>
      <section className={classes.info}>
        <h1>{props.name}</h1>
        <p className={classes.price}>{props.price} VND</p>
        <p className={classes.desc}>{props.short_desc}</p>
        <p className={classes.category}>
          <b>CATEGORY:</b> <span>&nbsp;{props.category}</span>
        </p>
        <div className={classes.qty}>
          <span className={classes.label}>QUANTITY</span>
          <div className={classes['qty-box']}>
            <button onClick={() => decreaseQty()} className={classes.btn}>
              <i className="fa-solid fa-caret-left"></i>
            </button>
            <span>{quantity}</span>
            <button onClick={() => increaseQty()} className={classes.btn}>
              <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
        </div>
          <button className={classes['btn-add']} onClick={addProductToCart}>Add to cart</button>
      </section>
    </figure>
  )
}

export default Summary
