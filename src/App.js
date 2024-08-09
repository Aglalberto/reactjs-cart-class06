import {useState} from 'react'
import './App.css';
import ProductList from './productlist';
import Cart from './cart';

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  } 

  return (
    <div className="App">
      <ProductList addToCart={addToCart} />
      <Cart cart={cart}/>
    </div>
  );
}

export default App;