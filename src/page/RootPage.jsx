import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation/MainNavigation'
import Footer from '../components/Footer/Footer'

const RootPage = () => {
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