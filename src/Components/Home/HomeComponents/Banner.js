import React, { useState } from 'react';
import banner from '../../../images/image/home.JPG';
import home2 from '../../../images/image/home2.JPG';
import home3 from '../../../images/image/home3.JPG';
import home4 from '../../../images/image/home4.JPG';
import home5 from '../../../images/image/home5.JPG';
// import CompanyLogo from '../../../Common/Components/CompanyLogo';
import Button from 'react-bootstrap/Button';
import LinkTo from '../../../Common/Components/LinkTo';
import { Carousel } from 'react-bootstrap';
import '../Home.css';

// styling
const Style = {
    img: {
        height: '580px',
    },
};
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="mt-2">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100 banner-img " src={home2} alt="First slide" />
                    <Carousel.Caption>
                        <div style={Style.bannerStyle} className="d-flex align-items-end justify-content-center">
                            <div className="text-white" style={Style.paragraphContainer}>
                                <h1 className="header-title">M/S JAHANARA</h1>
                                <p className="font-weight-bold">CONSTRUCTION & SUPPLIER</p>
                                <div className="d-flex justify-content-center">
                                    <LinkTo to="/about">
                                        <Button variant="warning">About Us</Button>
                                    </LinkTo>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 banner-img " src={home3} alt="Second slide" />

                    <Carousel.Caption>
                        <div style={Style.bannerStyle} className="d-flex align-items-end justify-content-center">
                            <div className="text-warning " style={Style.paragraphContainer}>
                                <h1 className="header-title">M/S JAHANARA</h1>
                                <p className="font-weight-bold">CONSTRUCTION & SUPPLIER</p>
                                <div className="d-flex justify-content-center">
                                    <LinkTo to="/about">
                                        <Button variant="warning">About Us</Button>
                                    </LinkTo>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 banner-img " src={banner} alt="Second slide" />

                    <Carousel.Caption>
                        <div style={Style.bannerStyle} className="d-flex align-items-end justify-content-center">
                            <div className="text-white" style={Style.paragraphContainer}>
                                <h1 className="header-title">M/S JAHANARA</h1>
                                <p className="font-weight-bold">CONSTRUCTION & SUPPLIER</p>
                                <div className="d-flex justify-content-center">
                                    <LinkTo to="/about">
                                        <Button variant="warning">About Us</Button>
                                    </LinkTo>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 banner-img " src={home5} alt="Second slide" />

                    <Carousel.Caption>
                        <div style={Style.bannerStyle} className="d-flex align-items-end justify-content-center">
                            <div className="text-white" style={Style.paragraphContainer}>
                                <h1 className="header-title">M/S JAHANARA</h1>
                                <p className="font-weight-bold">CONSTRUCTION & SUPPLIER</p>
                                <div className="d-flex justify-content-center">
                                    <LinkTo to="/about">
                                        <Button variant="warning">About Us</Button>
                                    </LinkTo>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 banner-img " src={home4} alt="Second slide" />

                    <Carousel.Caption>
                        <div style={Style.bannerStyle} className="d-flex align-items-end justify-content-center">
                            <div className="text-white" style={Style.paragraphContainer}>
                                <h1 className="header-title">M/S JAHANARA</h1>
                                <p className="font-weight-bold">CONSTRUCTION & SUPPLIER</p>
                                <div className="d-flex justify-content-center">
                                    <LinkTo to="/about">
                                        <Button variant="warning">About Us</Button>
                                    </LinkTo>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
