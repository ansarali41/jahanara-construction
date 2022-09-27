import React from 'react';
import MyDivider from '../../../Common/Components/MyDivider';
import commitmentImg from '../../../images/Commitments.png';

const Commitments = () => {
    const Style = {
        commitText: {
            color: '#F58128',
        },
        para: {
            fontSize: 26,
        },
    };
    return (
        <div className="py-5">
            <div className="d-flex justify-content-center">
                <img src={commitmentImg} alt="" className="img-fluid w-25" />
            </div>
            <div className="text-center">
                <h1 className="display-6">Business</h1>
                <h1 style={Style.commitText}>
                    <strong>Commitments</strong>
                </h1>
            </div>
            <div className="py-3">
                <MyDivider width="80px" background="black" />
            </div>
            <div>
                <p className="lead" style={Style.para}>
                    Saving commitments on words & time is the first things in the business;
                </p>
                <p className="lead" style={Style.para}>
                    Successful deals is finalized by goals, but setting goals is nothing if you do not stick with them;
                </p>
                <p className="lead" style={Style.para}>
                    Commitment to value is the core, it forces to hardest way of working;
                </p>
                <p className="lead" style={Style.para}>
                    Making a team is much more strategic way to success. Here’s the power of we is enforces to result.{' '}
                </p>
            </div>
        </div>
    );
};

export default Commitments;
