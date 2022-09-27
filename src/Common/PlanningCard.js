import React from 'react';

const PlanningCard = ({ id, description }) => {
    const Style = {
        main: {
            width: 210,
            height: 290,
            borderRadius: 5,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 80,
            backgroundColor: '#d1d2d4',
        },

        para: {
            fontSize: 22,
        },
        hexIcon: {
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: '#f58129',
            width: 70,
            height: 70,
            color: 'white',
            borderRadius: 5,
            position: 'absolute',
            top: -35,
        },
    };
    return (
        <div style={Style.main} className="shadow p-3 mb-5 rounded">
            {/* icon */}
            <div style={Style.hexIcon} className="d-flex align-items-center justify-content-center">
                <div>
                    <h5>{id}</h5>
                </div>
            </div>
            {/* card */}
            <div>
                <p style={Style.para} className="p-4">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default PlanningCard;
