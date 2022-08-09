import { Route, Routes } from 'react-router-dom';
import { Store } from '../pages/store/Store';
import { Cart } from '../pages/cart/Cart';

export function Pages(){
    return(
        <Routes>
          <Route path="/" element={<Store/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    );
}