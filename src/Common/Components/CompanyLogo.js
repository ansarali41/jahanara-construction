import React from 'react';
import companyImg from '../../images/company-logo.jpg';

const CompanyLogo = () => {
    const logoStyle = {
        width: '220px',
    };
    return (
        <>
            <img className="img-fluid" src={companyImg} style={logoStyle} alt="img" />
        </>
    );
};

export default CompanyLogo;
