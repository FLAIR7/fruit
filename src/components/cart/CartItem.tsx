import { Button, Card } from "react-bootstrap"
import { useCart } from "../../contexts/CartContext"
import { useEffect, useState} from "react";
import { Frutas} from "../../types/Fruta";
import axios from "axios";

type CartProps = {
    id: number,
    quantity: number,
}

export function CartItem({id, quantity}: CartProps) {
    const {removeFromCart, 
        decreaseCartQuantity,
        increaseCartQuantity
    } = useCart();
    const [frutas, setFrutas] = useState<Frutas[]>([]);

    function x(){
        axios.get('/api/fruit/all')
        .then(res => setFrutas(res.data));
      }

    useEffect(() => x());

    const item = frutas.find(item => item.id === id);
    if(item == null) return null;

    return (
        <Card className="h-100">
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <span className="fs-2">{item.name}</span>
                    X{quantity}
                </Card.Title>
                <div className="mt-auto">
                    <Button style={{marginRight: "5px"}}size="sm" className="btn primary" onClick={() => increaseCartQuantity(item.id)}>+</Button>
                    {quantity !== 1 ? (
                        <Button size="sm" className="btn btn-danger" onClick={() => decreaseCartQuantity(item.id)}>-</Button>
                    ): (
                        <Button size="sm" className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}