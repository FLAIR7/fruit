import { useState } from "react"
import { Card, Modal } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { useCart } from "../../contexts/CartContext"
import { Frutas} from "../../types/Fruta";

interface Props {
    fruta: Frutas
}

export function StoreFruits({fruta}: Props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        increaseCartQuantity,
    } = useCart();

    return (
        <Card className="h-100">
            <Card.Body>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>
                        <span className="fs-2">{fruta.name}</span>
                    </Card.Title>
                    <div className="mt-auto">
                        <Button style={{marginRight: "10px"}}variant="primary" onClick={() => increaseCartQuantity(fruta.id)}>
                            Add To Cart
                        </Button>
                        
                        <Button variant="danger" onClick={handleShow}>
                            Info
                        </Button>
                        <Modal show={show} onHide={handleClose} keyboard={false}>
                            <Modal.Header>Info</Modal.Header>
                            <Modal.Body>
                                <p>Family: {fruta.family}</p>
                                <p>Genus: {fruta.genus}</p>
                                <p>Order: {fruta.order}</p>
                                <hr></hr>
                                <p>Nutritions</p>
                                <ul>
                                    <li>Carbohydrates: {fruta.nutritions.carbohydrates}</li>
                                    <li>Protein: {fruta.nutritions.protein}</li>
                                    <li>Fat: {fruta.nutritions.fat}</li>
                                    <li>Calories: {fruta.nutritions.calories}</li>
                                    <li>Sugar: {fruta.nutritions.sugar}</li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}