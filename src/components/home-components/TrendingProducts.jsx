import React from 'react'
import Products from '../Products/Products'
import classes from './TrendingProducts.module.css'
import { popupActions } from "../../store/popup";
import { useDispatch, useSelector } from 'react-redux'

const TrendingProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsList.allProductList);
  
  return (
    <>
        <p className={classes.sub_head}><i>MADE THE HARD WAY</i></p>
        <h2 className={classes.heading}><i>TOP TRENDING PRODUCTS</i></h2>
        <Products products={products} action={(data) => dispatch(popupActions.open(data))} />
    </>
  )
}

export default TrendingProducts