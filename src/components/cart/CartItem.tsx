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

    async function loadData(){
        await axios.get('/api/fruit/all')
            .then(res => setFrutas(res.data));
    }

    useEffect(() => {
        loadData()
    }, []);

    const fruit = frutas.find(fruit => fruit.id === id);
    if(fruit == null) return null;

    return (
        <Card className="h-100">
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <span className="fs-2">{fruit.name}</span>
                    X{quantity}
                </Card.Title>
                <div>
                    <ul>
                        <li>Carbohydrates: {fruit.nutritions.carbohydrates}</li>
                        <li>Protein: {fruit.nutritions.protein}</li>
                        <li>Fat: {fruit.nutritions.fat}</li>
                        <li>Calories: {fruit.nutritions.calories}</li>
                        <li>Sugar: {fruit.nutritions.sugar}</li>
                    </ul>
                </div>
                <div className="mt-auto">
                    <Button style={{marginRight: "5px"}}size="sm" className="btn primary" onClick={() => increaseCartQuantity(fruit.id)}>+</Button>
                    {quantity !== 1 ? (
                        <Button size="sm" className="btn btn-danger" onClick={() => decreaseCartQuantity(fruit.id)}>-</Button>
                    ): (
                        <Button size="sm" className="btn btn-danger" onClick={() => removeFromCart(fruit.id)}>Remove</Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}