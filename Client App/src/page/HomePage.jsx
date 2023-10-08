import React from 'react'
import Banner from '../components/home/Banner'
import CategoriesList from '../components/home/CategoriesList'
import TrendingProducts from '../components/home/TrendingProducts'
import OtherInfo from '../components/home/OtherInfo'
import { useLoaderData } from 'react-router-dom'
import numberToPrice from '../util/number-to-price'
import axios from '../util/axios'

const HomePage = () => {
  const data = useLoaderData()
  return (
    <>
      <Banner path={data.pathBanner} />  
      <CategoriesList path={data.pathCategories} />
      <TrendingProducts products={data.products} />
      <OtherInfo />
    </>
  )
}

export default HomePage

export async function loader() {
  try {
    const res = await axios.get('/home')
    const data = res.data

    // handle price products
    const editProds = data.products.map(prod => {
      const price = numberToPrice(prod.price)
      return { ...prod, price }
    })
    
    return { ...data, products: editProds }
  } catch (err) {
    console.log(err)
  }
}