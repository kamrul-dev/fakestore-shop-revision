import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState(0);
  const addToCart = () =>{setCart(cart + 1)};
  return (
    <div className="App">
      <Header cart={cart}></Header>
      <Products addToCart={addToCart}></Products>
    </div>
  );
}

export default App;
