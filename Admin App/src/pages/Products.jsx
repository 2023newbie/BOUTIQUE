import { useLoaderData } from 'react-router-dom'
import numberToPrice from '../utils/number-to-price'
import { useEffect, useState } from 'react'
import SearchBox from '../components/SearchBox'
import TableProducts from '../components/TableProducts'
import getToken from '../utils/get-token'

let allProducts = []

const Products = () => {
  const allProds = useLoaderData()
  const [inputSearch, setInputSearch] = useState('')
  const [products, setProducts] = useState(allProds)

  useEffect(() => {
    const timer = setTimeout(() => {
      const pointProds = allProducts.filter(prod => {
        return prod.name.toLowerCase().includes(inputSearch.trim().toLowerCase())
      })
      setProducts(pointProds)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [inputSearch])

  return (
    <>
      <SearchBox input={inputSearch} changeInput={setInputSearch} />
      <TableProducts products={products} />
    </>
  )
}

export default Products

export async function loader() {
  const token = getToken()
  try {
    const res = await fetch('https://asm3-nodejs-f00e5645d891.herokuapp.com/admin/products', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    const data = await res.json()
    const products = data.map(prod => {
      const price = numberToPrice(prod.price)
      return { ...prod, price }
    })
    allProducts = products
    return products
  } catch (err) {
    console.log(err)
  }
}