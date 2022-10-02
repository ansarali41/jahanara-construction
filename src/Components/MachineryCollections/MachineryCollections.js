import React, { useEffect } from 'react';
import Machines from '../Machines/Machines';
import Machinery from './Machinery';

const MachineryCollections = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <Machines />
            <Machinery />
        </div>
    );
};

export default MachineryCollections;
