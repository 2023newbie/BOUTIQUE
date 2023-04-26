import React from 'react'
import classes from './ProductsShop.module.css'
import Products from '../Products/Products'

const ProductsShop = () => {
  return (
    <div>
        <div className={classes.finding_query}>
            <input type="text" placeholder='Enter Search Here!' />
            <select id="sort" name="sort">
                <option value="default">Default sorting</option>
            </select>
        </div>
        <Products />
    </div>
  )
}

export default ProductsShop