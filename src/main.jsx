import ReactDOM from 'react-dom/client'
import App from './App'
import FilterProvider from './contexts/filters'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)
