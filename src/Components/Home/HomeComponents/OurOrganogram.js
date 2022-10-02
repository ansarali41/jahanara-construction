import React from 'react';
import icon from '../../../images/Organogram_icon.png';
import orgImg from '../../../images/ourOrg.jpg';

const OurOrganogram = () => {
    const Style = {
        icon: {
            width: 70,
            marginTop: '-8px',
        },
        title: {
            fontSize: 40,
        },
        para: {
            maxWidth: 850,
        },
        photo: {
            width: '100%',
            maxWidth: 750,
        },
    };
    return (
        <div className="mb-5 mt-3">
            <div className="d-flex justify-content-center align-items-center">
                <img src={icon} alt="" className="img-fluid" style={Style.icon} />
                <h1 style={Style.title}>Our Organogram</h1>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-1">
                <p className="lead text-center" style={Style.para}>
                    <strong>M/s Jahanara Construction & Supllier</strong> Company have their own resident facility for their employee, so that they couldn't face any trouble to
                    collect them
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <img src={orgImg} alt="" className="img-fluid" style={Style.photo} />
            </div>
        </div>
    );
};

export default OurOrganogram;
