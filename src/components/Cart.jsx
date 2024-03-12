import { CartIcon, RemoveFromCartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { useState } from 'react'
import { useCart } from '../hooks/useCart'

function Cart () {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, removeFromCart, clearCart, removeItem, addToCart } = useCart()
  const hasProductsInCart = cart.length > 0

  const openCart = () => setIsCartOpen(!isCartOpen)
  const closeCart = () => setIsCartOpen(false)

  return (
    <>
      <button className='button' onClick={openCart}>
        <CartIcon />
      </button>

      <aside className={isCartOpen ? 'cart open' : 'cart'}>
        <div className='cart__header'>
          <h1>Carrito</h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{ marginRight: '10px' }} onClick={() => clearCart()}>
              <ClearCartIcon />
            </button>
            <button onClick={closeCart}>X</button>
          </div>
        </div>
        <ul className='cart__list'>
          {
            hasProductsInCart
              ? cart.map(product => (
                <li key={product.id} className='product'>
                  <img src={product.thumbnail} alt={product.title} />
                  <div className='product__info'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>{product.title}</span>
                      <span style={{ cursor: 'pointer' }} onClick={() => removeFromCart({ product })}>
                        <RemoveFromCartIcon />
                      </span>
                    </div>
                    <div>
                      <button onClick={() => removeItem({ product })}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => addToCart({ product })}>+</button>
                    </div>
                  </div>
                </li>
              ))
              : <p style={{ textAlign: 'center' }}>No hay productos en el carrito.</p>
          }
        </ul>
      </aside>
    </>
  )
}

export default Cart
