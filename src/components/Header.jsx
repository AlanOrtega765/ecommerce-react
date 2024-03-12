import Cart from './Cart'
import Filters from './Filters'
import './Header.css'

function Header () {
  return (
    <header className='header'>
      <div className='header__actions'>
        <h1 className='header__title'>Shopping Cart</h1>
        <Cart />
      </div>
      <Filters />
    </header>
  )
}

export default Header
