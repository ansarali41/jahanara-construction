import React from 'react';
import banner from '../../../images/banner.jpg';
import CompanyLogo from '../../../Common/Components/CompanyLogo';
import Button from 'react-bootstrap/Button';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '540px',
    };
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h1 style={{ fontSize: 50 }}>
                        COMPANY <br />
                        PROFILE
                    </h1>
                </div>
                <CompanyLogo />
            </div>
            {/* <img src={banner} alt="" className="img-fluid" /> */}
            <div style={bannerStyle} className="d-flex align-items-center justify-content-end">
                <div className="text-warning shadow p-3 mb-5  rounded">
                    <h1 className="header-title">M/S JAHANARA</h1>
                    <p className="font-weight-bold">CONSTRUCTION & SUPLLIER</p>
                    <div className="d-flex justify-content-center">
                        <Button variant="warning">Warning</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
