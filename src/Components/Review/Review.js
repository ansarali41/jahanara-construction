import React from 'react';
import review1 from '../../images/0031.jpg';

const Review = () => {
    return (
        <div className="container">
            <div className="text-center pt-4">
                <h1 style={{ color: '#05aeef' }}>OUR SUPLLIER EXPERIENCE</h1>
                <div className="d-flex justify-content-center mt-2">
                    <div style={{ width: '15%', height: 8, background: 'black' }}></div>
                </div>
            </div>
            <div>
                <img className="img-fluid p-4" src={review1} alt="" />
                <img className="img-fluid p-4" src={review1} alt="" />
                <img className="img-fluid p-4" src={review1} alt="" />
                <img className="img-fluid p-4" src={review1} alt="" />
                <img className="img-fluid p-4" src={review1} alt="" />
            </div>
        </div>
    );
};

export default Review;
