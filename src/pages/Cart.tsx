import { useCart } from "../contexts/CartContext";
import { CartItem} from "../components/cart/CartItem";
import { Button, Stack } from "react-bootstrap";

export function Cart(){
    const {cartItems, removeAll} = useCart();

    return(
        <div>
            <h1>Cart</h1>
            <Stack gap={3}>
                {cartItems.map(items => (
                    <CartItem key={items.id} {...items}/>
                ))}
            </Stack>
            <div style={{marginTop: "10px"}}>
                 <Button onClick={() => removeAll()}>Remove ALL!</Button>
            </div>
        </div>
    )
}