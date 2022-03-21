import React, { useState } from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import styles from "/styles/Board/WriteReview.module.css";
import WriteReview from '/components/Board/WriteReview.js';
import WriteQna from '/components/Board/WriteQna.js';
import WriteFree from '/components/Board/WriteFree.js';

function writermain(props) {

    const [page, setPage] = useState("리뷰");
    const review = () => {
        setPage("리뷰");
    }
    const free = () => {
        setPage("자유");
    }
    const qna = () => {
        setPage("QnA");
    }
    
    return (
        <div>
            <Container>
                <div style={{ marginTop: "3%", marginBottom: "5%", width: "350px" }}>
                    <Row>
                        <Col xs={4} style={{ marginTop: "2%" }}>
                            <h5 className={styles.writereview_category}>카테고리</h5>
                        </Col>
                        <Col xs={8}>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {page}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={review}>리뷰</Dropdown.Item>
                                    <Dropdown.Item onClick={free}>자유</Dropdown.Item>
                                    <Dropdown.Item onClick={qna}>QnA</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                {
                    page === "리뷰" && <WriteReview/>
                }
                {
                    page === "자유" && <WriteFree/>
                }
                {
                    page === "QnA" && <WriteQna/>
                }
            </Container>
        </div>
    );
}

export default writermain;