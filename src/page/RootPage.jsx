import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation/MainNavigation'
import Footer from '../components/Footer/Footer'
import { useDispatch } from "react-redux";
import { productsListActions } from '../store/products-list';
import { useEffect } from "react";

const RootPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchDataHandler = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
    
        if (!response.ok) throw new Error("Something went wrong!");
    
        const data = await response.json();
        const fixData = data.map((product) => {
          let priceArr = product.price.split("");
          const length = priceArr.length;
          const indexFix = [3, 6, 9, 12];
          for (const index of indexFix)
            if (index < length) priceArr.splice(length - index, 0, ".");
          return { ...product, price: priceArr.join("") };
        });
        dispatch(productsListActions.updateAllProductList(fixData))
        console.log(fixData)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchDataHandler()
  }, [dispatch])

  return (
    <>
      <MainNavigation />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootPage