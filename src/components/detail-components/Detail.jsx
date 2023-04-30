import React, { useState } from 'react'
import Products from '../Products/Products'
import { useNavigate } from 'react-router-dom'
import classes from './Detail.module.css'

const Detail = (props) => {
  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()
  const propertiesArr = props.long_desc.split('\n•')
  const paraHead = [propertiesArr[0]]
  propertiesArr.shift()
  const propertiesElement = propertiesArr.map(property => <p>- {property}</p>)
  const heading = paraHead.map(para => <h3>{para}</h3>)

  return (
    <figure className={classes.detail}>
        <button className={classes.btn} onClick={() => setIsShow(prevState => !prevState)}>DESCRIPTION</button>
        {isShow && <>
          <h2>PRODUCT DESCRIPTION</h2>
        {heading}
        {propertiesElement}
        <h2>RELATED PRODUCTS</h2>
        <Products products={props.relatedProducts} action={(product) => {
          navigate(`/detail?id=${product._id.$oid}`)
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }} />
        </>}
    </figure>
  )
}

export default Detail