import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';

const LinkTo = ({ to, children }) => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
    };
    return (
        <div>
            <Link to={to} style={linkStyle} className="links">
                {children}
            </Link>
        </div>
    );
};

export default LinkTo;
