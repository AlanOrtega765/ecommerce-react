import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

function CartProvider ({ children }) {
  const [cart, setCart] = useState(() => {
    const cartFromStorage = window.localStorage.getItem('cart')
    if (cartFromStorage) return JSON.parse(cartFromStorage)
    return []
  })

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = ({ product }) => {
    const productInCartIndex = cart.findIndex(item => product.id === item.id)

    if (productInCartIndex >= 0) {
      const newCart = [...cart]
      newCart[productInCartIndex].quantity++
      return setCart(newCart)
    }

    setCart((prevState) => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeItem = ({ product }) => {
    const productInCartIndex = cart.findIndex(item => product.id === item.id)

    const newCart = [...cart]
    if (newCart[productInCartIndex].quantity <= 1) return removeFromCart({ product })
    newCart[productInCartIndex].quantity--
    return setCart(newCart)
  }

  const removeFromCart = ({ product }) => {
    const newCart = cart.filter(item => item.id !== product.id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      clearCart,
      addToCart,
      removeFromCart,
      removeItem
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
