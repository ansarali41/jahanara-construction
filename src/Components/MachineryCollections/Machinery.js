import React from 'react';
import MyDivider from '../../Common/Components/MyDivider';
import machinery_collections from '../../images/machinery_collections.png';

const Machinery = () => {
    const Style = {
        title: {
            fontSize: 40,
        },
    };
    return (
        <div className="my-5">
            <div className="text-center">
                <h1 style={Style.title}>Our Machinery Collections</h1>
            </div>
            <div className="d-flex justify-content-center">
                <MyDivider width={100} height="10px" />
            </div>
            <div className="d-flex justify-content-center mt-3">
                <img src={machinery_collections} alt="" className="img-fluid w-50" />
            </div>
        </div>
    );
};

export default Machinery;
