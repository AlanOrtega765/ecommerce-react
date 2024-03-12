import './App.css'
import Products from './components/Products'
import { useProducts } from './hooks/useProducts'
import Header from './components/Header'
import { useFilters } from './hooks/useFilters'
import CartProvider from './contexts/cart'

function App () {
  const { products } = useProducts()
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <main>
        <ul className='grid'>
          <Products products={filteredProducts} />
        </ul>
      </main>
    </CartProvider>
  )
}

export default App
