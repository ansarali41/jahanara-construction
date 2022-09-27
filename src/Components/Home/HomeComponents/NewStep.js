import React from 'react';
import newStepBanner from '../../../images/newStep.png';
import MyDivider from '../../../Common/Components/MyDivider';

const NewStep = () => {
    const Style = {
        divider: { width: 150 },
        title: { fontSize: 70, maxWidth: 600 },
    };
    return (
        <div className="my-5">
            <div>
                <img src={newStepBanner} alt="" className="img-fluid" />
            </div>
            <div className="p-5">
                <div className="border border-secondary" style={Style.divider}>
                    <MyDivider width="150px" height="40px" />
                </div>
                <h1 className="text-muted" style={Style.title}>
                    New step begins here
                </h1>
            </div>
        </div>
    );
};

export default NewStep;
