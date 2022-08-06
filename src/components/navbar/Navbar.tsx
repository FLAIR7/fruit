import { ShoppingCartOutlined, Store } from "@material-ui/icons";
import {Button, Container, Nav, Navbar as NavbarBg} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useCart } from "../../contexts/CartContext";

export function Navbar(){
    const {
        cartQuantity
    } = useCart();

    return (
        <NavbarBg className="bg-dark shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link className="text-white navbar-brand" to="/" as={NavLink}>
                        Fruits <Store/>
                    </Nav.Link>
                </Nav>
                <Button 
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    onClick={() => window.location.href="cart"}
                >

                    <ShoppingCartOutlined/>
                    <div className="rounded-circle 
                        bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white", 
                            width: "1.5rem", 
                            height: "1.5rem", 
                            position: "absolute", 
                            bottom: 0, 
                            right: 0,
                            transform: "translate(25%, 25%)",}}
                    >
                        {cartQuantity}
                    </div>

                </Button>
            </Container>
        </NavbarBg>
    )

}