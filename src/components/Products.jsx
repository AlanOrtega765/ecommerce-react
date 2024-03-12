import { AddToCartIcon } from '../components/Icons'
import { useCart } from '../hooks/useCart'
import './Products.css'

function Products ({ products }) {
  const { addToCart } = useCart()
  const hasProducts = products.length > 0

  return (
    hasProducts
      ? products.map(product => (
        <li className='card' key={product.id}>
          <img className='card__image' src={product.thumbnail} alt={product.title} />
          <div className='card__body'>
            <div className='card__info'>
              <strong>{product.title} - ${product.price}</strong>
              <p>{product.description}</p>
            </div>
            <button className='card__button' type='button' onClick={() => addToCart({ product })}>
              Añadir al carrito
              <AddToCartIcon />
            </button>
          </div>
        </li>
      ))
      : <p>No se encontraron productos.</p>
  )
}

export default Products
