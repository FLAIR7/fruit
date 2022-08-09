import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { CartProvider} from './contexts/CartContext';
import { Pages } from './routes/Pages';

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar/>
        <Pages/>
      </CartProvider>
    </div>
  );
}

export default App;
