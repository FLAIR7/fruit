import {Col, Row} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { StoreFruits } from "../../components/store/StoreFruits";
import './Store.css';
import { Frutas } from "../../types/Fruta";
import { LoadingSpinner } from "../../components/Spinner/LoadingSpinner";

export function Store(){

    const [frutas, setFrutas] = useState<Frutas[]>([]);

    async function loadData(){
        await axios.get('/api/fruit/all')
            .then(res => setFrutas(res.data));
    }

    useEffect(() => {
        loadData()
    }, []);

    return (
        <div className="container">
            <Row md={2} xs={1} lg={3} className="g-3">
                {frutas.length === 0 ?
                <div className="text">
                    <LoadingSpinner/>
                </div>

              :  frutas.map(fruta => (
                    <Col key={fruta.id}>
                        <StoreFruits fruta={fruta as Frutas}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}