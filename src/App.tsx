import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Store } from './pages/Store';
import { CartProvider} from './contexts/CartContext';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Store/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
