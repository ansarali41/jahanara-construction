import React from 'react';
import { Link } from 'react-router-dom';

const LinkTo = ({ to, children }) => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
    };
    return (
        <div>
            <Link to={to} style={linkStyle}>
                {children}
            </Link>
        </div>
    );
};

export default LinkTo;
