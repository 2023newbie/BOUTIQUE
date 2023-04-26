import React from 'react'
import Banner from '../components/home-components/Banner'
import ListCategories from '../components/home-components/ListCategories'
import TrendingProducts from '../components/home-components/TrendingProducts'
import Popup from '../components/Popup/Popup'
import { useSelector } from 'react-redux'
import OtherInfo from '../components/home-components/OtherInfo'

const HomePage = () => {
  const isPopupOpen = useSelector(state => state.popup.isPopupOpen)
  const product = useSelector(state => state.popup.product)

  return (
    <>
      {isPopupOpen && <Popup {...product} />}
      <Banner />  
      <ListCategories />
      <TrendingProducts />
      <OtherInfo />
    </>
  )
}

export default HomePage