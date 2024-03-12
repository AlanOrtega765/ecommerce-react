import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export const useCart = () => {
  const { cart, addToCart, removeFromCart, clearCart, removeItem } = useContext(CartContext)

  return { cart, addToCart, removeFromCart, clearCart, removeItem }
}
