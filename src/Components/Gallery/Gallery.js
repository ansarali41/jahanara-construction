import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="container">
            {/* title section */}
            <div className="text-center pt-4">
                <h1>Photos Gallery</h1>
                <div className="d-flex justify-content-center mt-2">
                    <div style={{ width: '11%', height: 8, background: 'rgb(5, 174, 239)' }}></div>
                </div>
            </div>
            {/* Gallery section */}
            <Row xs={1} md={2} className="g-4 p-5 m-5 mt-0">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.unsplash.com/photo-1617870757002-5c84bb82a755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            />
                            <Card.Body style={{ background: 'rgb(5, 174, 239)' }}>
                                <Card.Title style={{ color: 'white', fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>Card title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Gallery;
