import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Card } from "react-bootstrap";
import { Shoppingcamp } from "../../function/axios";
import styles from "../../styles/Shopping/Shopping.module.css";

function ShoppingCard(params) {

    const [dummy, setDummy] = useState("");
    
    return (
        <>
            <Card style={{ width: "21rem", height: "23rem", borderRadius: "5%", marginBottom: "10%" }}>
                <Card.Img variant="top" src={params.image} style={{width: "100%", height: "50%", borderRadius: "7% 7% 0% 0%"}} />
                
                <Card.Body>
                    <Card.Title style={{ fontSize: "20px", fontWeight: "bold", textAlign: "-webkit-left" }}>{params.title.replaceAll("<b>", "").replaceAll("</b>", "")}</Card.Title>

                    <Card.Text style={{ fontSize: "16px", textAlign: "-webkit-left" }}>
                        <a>가격 : {params.price}</a>
                    </Card.Text>
                    <Card.Text style={{ fontSize: "16px", marginTop: "2%", textAlign: "-webkit-left", verticalAlign: "bottom" }}>
                        <a className={styles.shoppingcard_link} style={{cursor:'pointer'}} onClick={() => window.open(`${params.link}`, '_black')}>바로가기</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default ShoppingCard;
