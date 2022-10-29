import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import A from '../../images/gallery/A.JPG';
import B from '../../images/gallery/B.jpg';
import C from '../../images/gallery/C.JPG';
import D from '../../images/gallery/D.jpg';
import E from '../../images/gallery/E.jpg';
import F from '../../images/gallery/F.jpg';
import G from '../../images/gallery/G.jpg';
// import W from '../../images/gallery/W.JPG';
import Z from '../../images/gallery/Z.JPG';
import './Gallery.css';
const imgData = [
    {
        id: 1,
        image: A,
    },
    {
        id: 2,
        image: B,
    },
    {
        id: 3,
        image: C,
    },
    {
        id: 4,
        image: D,
    },
    {
        id: 5,
        image: E,
    },
    {
        id: 6,
        image: F,
    },
    {
        id: 7,
        image: G,
    },
    {
        id: 8,
        image: Z,
    },
];

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mt-5 pt-4 bg-light">
            {/* title section */}
            <div className="text-center pt-4">
                <h1>Photos Gallery</h1>
                <div className="d-flex justify-content-center mt-2">
                    <div style={{ width: '11%', height: 8, background: 'rgb(5, 174, 239)' }}></div>
                </div>
            </div>
            {/* Gallery section */}
            <Row xs={1} md={2} className="g-4 p-5 m-5 mt-0">
                {imgData.map(el => (
                    <Col key={el.id}>
                        <Card>
                            <Card.Img variant="top" src={el.image} />
                            {/* <Card.Body style={{ background: 'rgb(5, 174, 239)' }}>
                                <Card.Title style={{ color: 'white', fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>Card title</Card.Title>
                            </Card.Body> */}
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Gallery;
