import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/share/Navbar/Navbar'
import Footer from '../components/share/Footer/Footer'
import Message from '../components/share/Popup/Message'
import Loader from '../components/share/Loader/Loader'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart'

const RootPage = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isLoad = navigation.state === 'loading'
  const email = useSelector(state => state.login.info.email)

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem('carts')) || []
    const pointCart = carts.find(cart => cart.email === email)
    if (pointCart) dispatch(cartActions.UPDATE_CART(pointCart))
  }, [email, dispatch])

  return (
    <>
      {isLoad && <Loader />}
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Message />
      <Footer />
    </>
  )
}

export default RootPage
