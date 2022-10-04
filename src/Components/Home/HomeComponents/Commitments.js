import React from 'react';
// import MyDivider from '../../../Common/Components/MyDivider';
import commitmentImg from '../../../images/Commitments.png';

const Commitments = () => {
    const Style = {
        commitText: {
            color: '#F58128',
        },
        para: {
            fontSize: 22,
        },
        logo: {
            maxWidth: 180,
        },
        businessText: {
            fontWeight: 400,
        },
    };
    return (
        <div className="my-5 p-4 bg-light">
            <div className="d-flex justify-content-center">
                <img src={commitmentImg} alt="" className="img-fluid" style={Style.logo} />
            </div>
            <div className="text-center p-4">
                <h2 style={Style.businessText}>Business</h2>
                <h2 style={Style.commitText}>
                    <strong>Commitments</strong>
                </h2>
            </div>
            {/* <div className="py-3">
                <MyDivider width="80px" background="black" />
            </div> */}
            <ul style={{ listStyleType: 'circle' }}>
                <li className="lead" style={Style.para}>
                    Saving commitments on words & time is the first things in the business;
                </li>
                <li className="lead" style={Style.para}>
                    Successful deals is finalized by goals, but setting goals is nothing if you do not stick with them;
                </li>
                <li className="lead" style={Style.para}>
                    Commitment to value is the core, it forces to hardest way of working;
                </li>
                <li className="lead" style={Style.para}>
                    Making a team is much more strategic way to success. Here’s the power of we is enforces to result.{' '}
                </li>
            </ul>
        </div>
    );
};

export default Commitments;
