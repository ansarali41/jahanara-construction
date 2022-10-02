import React, { useEffect } from 'react';
import Environment from '../Environment/Environment';
import Introduction from '../Home/HomeComponents/Introduction';
import OurOrganogram from '../Home/HomeComponents/OurOrganogram';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mt-5 pt-5">
            <OurOrganogram />
            <Introduction />
            <Environment />
        </div>
    );
};

export default About;
