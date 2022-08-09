import { useCart } from "../../contexts/CartContext";
import { CartItem} from "../../components/cart/CartItem";
import { Button, Stack } from "react-bootstrap";
import { ShoppingCartOutlined } from "@material-ui/icons";

export function Cart(){
    const {cartItems, removeAll} = useCart();

    return(
        <div>
            <h1>Cart <ShoppingCartOutlined/></h1>
            <Stack gap={3}>
                {cartItems.length === 0 ? 
                    <div>
                        <h3>Your Cart is empty</h3>
                    </div>
                :
                cartItems.map(items => (
                    <CartItem key={items.id} {...items}/>
                ))}
            </Stack>
            <div style={{marginTop: "10px"}}>
                 <Button onClick={() => removeAll()}>Remove ALL!</Button>
            </div>
        </div>
    )
}