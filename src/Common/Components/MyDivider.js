import React from 'react';

const MyDivider = ({ width = '15%', height = '8px', background = 'rgb(5, 174, 239)' }) => {
    const MyDividerStyle = {
        width: width,
        height: height,
        background: background,
        borderRadius: 1,
    };
    return (
        <div>
            {/* divider */}
            <div className="d-flex">
                <div style={MyDividerStyle} />
            </div>
        </div>
    );
};

export default MyDivider;
