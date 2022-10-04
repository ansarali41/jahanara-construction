import React from 'react';
import Environment from '../../Environment/Environment';
import Introduction from './Introduction';

const HomeAbout = () => {
    return (
        <div className="my-5">
            <Introduction />
            <Environment />
        </div>
    );
};

export default HomeAbout;
