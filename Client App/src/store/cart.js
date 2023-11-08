import { createSlice } from '@reduxjs/toolkit'
import priceToNumber from '../util/price-to-number'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { listCart: [], totalPrice: 0 },
  reducers: {
    ADD_CART(state, action) {
      const email = action.payload.email
      const prod = action.payload.prod
      const prodId = prod._id
      
      const localCarts = JSON.parse(localStorage.getItem('carts')) || []
      const pointCartIndex = localCarts.findIndex(c => c.email === email)
      const numPrice = priceToNumber(prod.price)
      const addedQty = prod.qty
      const pointProd = state.listCart.find(p => p._id === prodId)
      state.totalPrice += numPrice * addedQty // update total price
      if (!pointProd) {
        if (state.listCart.length === 0) {
          if (pointCartIndex === -1) {
            localCarts.push({cart: [prod], email})
            localStorage.setItem('carts', JSON.stringify(localCarts))
          }
        }
        if (pointCartIndex > -1) {
          localCarts[pointCartIndex].cart.push(prod)
          localStorage.setItem('carts', JSON.stringify(localCarts))
        }
        state.listCart.push(prod)
        return
      }
      
      const pointProdIndex = localCarts[pointCartIndex].cart.findIndex(
        p => p._id === prodId
      )
      localCarts[pointCartIndex].cart[pointProdIndex].qty += addedQty
      localStorage.setItem('carts', JSON.stringify(localCarts)) // save to storage
      const indexPointProd = state.listCart.findIndex(p => p._id === prodId)
      state.listCart[indexPointProd].qty += addedQty // update qty
    },
    SUB_CART(state, action) {
      // get data
      const email = action.payload.email
      const prod = action.payload.prod
      const id = prod._id
      const numPrice = priceToNumber(prod.price)
      const subtQty = 1

      // handle list cart
      const indexPointProd = state.listCart.findIndex(p => p._id === id)
      state.listCart[indexPointProd].qty -= subtQty // update qty
      const resultQty = state.listCart[indexPointProd].qty
      if (resultQty === 0) {
        state.listCart.splice(indexPointProd, 1)
      }
      state.totalPrice -= numPrice // update total price

      // handle local storage
      const localCarts = JSON.parse(localStorage.getItem('carts'))
      const pointCartIndex = localCarts.findIndex(c => c.email === email)
      localCarts[pointCartIndex] = { cart: state.listCart, email }
      localStorage.setItem('carts', JSON.stringify(localCarts)) // save to storage
    },
    UPDATE_CART(state, action) {
      const cart = action.payload.cart
      state.listCart = cart
      let sumPrice = 0
      for (const prod of cart) {
        const numPrice = priceToNumber(prod.price)
        sumPrice += numPrice * prod.qty
      }
      state.totalPrice = sumPrice
    },
    DELETE_CART(state, action) {
      const id = action.payload.id
      const email = action.payload.email
      // reduce price
      const pointProd = state.listCart.find(p => p._id === id)
      const numPrice = priceToNumber(pointProd.price)
      state.totalPrice -= numPrice * pointProd.qty
      // remove from state.listCart
      state.listCart = state.listCart.filter(p => p._id !== id)
      // remove from local storage
      const localCarts = JSON.parse(localStorage.getItem('carts'))
      const pointCartIndex = localCarts.findIndex(c => c.email === email)
      localCarts[pointCartIndex].cart = state.listCart
      localStorage.setItem('carts', JSON.stringify(localCarts))
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
