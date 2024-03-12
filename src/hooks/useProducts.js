import { useState } from 'react'
import { products as initialProducts } from '../api/products.json'

export const useProducts = () => {
  const [products] = useState(initialProducts)

  return { products }
}
