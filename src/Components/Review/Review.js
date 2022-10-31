import React from 'react';
import review1 from '../../images/0031.jpg';
import './Review.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Review = () => {
    const handleOnDragStart = e => e.preventDefault();
    return (
        <div className="container bg-light pt-5">
            <div className="text-center pb-4">
                <h1 style={{ color: '#05aeef' }}>OUR SUPPLIER EXPERIENCE</h1>
                <div className="d-flex justify-content-center mt-2">
                    <div style={{ width: '170px', height: 8, background: 'black' }}></div>
                </div>
            </div>

            <AliceCarousel mouseTrackingEnabled autoPlay={true} autoPlayInterval={2000} infinite={true}>
                <div className="d-flex justify-content-center">
                    <img src={review1} onDragStart={handleOnDragStart} className="yours-custom-class img-fluid w-50" alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <img src={review1} onDragStart={handleOnDragStart} className="yours-custom-class img-fluid w-50" alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <img src={review1} onDragStart={handleOnDragStart} className="yours-custom-class img-fluid w-50" alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <img src={review1} onDragStart={handleOnDragStart} className="yours-custom-class img-fluid w-50" alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <img src={review1} onDragStart={handleOnDragStart} className="yours-custom-class img-fluid w-50" alt="" />
                </div>
            </AliceCarousel>
        </div>
    );
};

export default Review;
