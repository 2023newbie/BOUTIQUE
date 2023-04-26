import React from 'react'
import Products from '../Products/Products'
import classes from './TrendingProducts.module.css'

const TrendingProducts = () => {
  return (
    <>
        <p className={classes.sub_head}><i>MADE THE HARD WAY</i></p>
        <h2 className={classes.heading}><i>TOP TRENDING PRODUCTS</i></h2>
        <Products />
    </>
  )
}

export default TrendingProducts