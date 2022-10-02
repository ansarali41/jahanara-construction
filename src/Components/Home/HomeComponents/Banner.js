import React, { useState } from 'react';
import banner from '../../../images/banner.jpg';
import missionBanner from '../../../images/mission_banner.jpg';
// import CompanyLogo from '../../../Common/Components/CompanyLogo';
import Button from 'react-bootstrap/Button';
import LinkTo from '../../../Common/Components/LinkTo';
import { Carousel } from 'react-bootstrap';

// styling
const Style = {
    // bannerStyle: { backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '540px' },
    paragraphContainer: {
        // background: 'linear-gradient(0deg, rgba(53,53,53,0.8491990546218487) 0%, rgba(35,35,35,0.5158657212885154) 100%)',
        // borderRadius: 10,
    },
    container: {},
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
            {/* <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h1 style={{ fontSize: 50 }}>
                        COMPANY <br />
                        PROFILE
                    </h1>
                </div>
                <CompanyLogo />
            </div> */}
            {/* <img src={banner} alt="" className="img-fluid" /> */}
            {/* <div style={Style.bannerStyle} className="d-flex align-items-center justify-content-end">
                <div className="text-warning shadow p-3 mb-5 rounded" style={Style.paragraphContainer}>
                    <h1 className="header-title">M/S JAHANARA</h1>
                    <p className="font-weight-bold">CONSTRUCTION & SUPLLIER</p>
                    <div className="d-flex justify-content-center">
                        <LinkTo to="/contact-us">
                            <Button variant="warning">Contact Us</Button>
                        </LinkTo>
                    </div>
                </div>
            </div> */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner} alt="First slide" style={Style.img} />
                    <Carousel.Caption>
                        <div style={Style.bannerStyle} className="d-flex align-items-end justify-content-center">
                            <div className="text-warning" style={Style.paragraphContainer}>
                                <h1 className="header-title">M/S JAHANARA</h1>
                                <p className="font-weight-bold">CONSTRUCTION & SUPLLIER</p>
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
                    <img className="d-block w-100" src={missionBanner} alt="Second slide" style={Style.img} />

                    <Carousel.Caption>
                        <div style={Style.bannerStyle} className="d-flex align-items-end justify-content-center">
                            <div className="text-warning " style={Style.paragraphContainer}>
                                <h1 className="header-title">M/S JAHANARA</h1>
                                <p className="font-weight-bold">CONSTRUCTION & SUPLLIER</p>
                                <div className="d-flex justify-content-center">
                                    <LinkTo to="/contact-us">
                                        <Button variant="warning">Contact Us</Button>
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
