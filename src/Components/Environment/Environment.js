import React from 'react';
import MyDivider from '../../Common/Components/MyDivider';
import environmentBanner from '../../images/environmentBanner.jpg';

const Environment = () => {
    return (
        <div className="row">
            <div className="py-5 col-6">
                <img src={environmentBanner} alt="" className="img-fluid " />
            </div>
            <div className="col-6">
                <div className="mt-5 pb-4">
                    <MyDivider width="100px" height="10px" background="#4EABE9" />
                </div>
                <p className="lead">
                    We are well aware of environment, safety and health issues that have a significant impact on our environment employees and interested parties. We are highly
                    determined to our commitment regarding full professional safety, health and environment friendly work practice with full compliance to legal issues. Achieve our
                    objectives and targets through preserving natural resources, prevention of pollution, injury and health issues. We are also committed to effective communication
                    within company staffs and interested parties. Promote continual improvement of EHS through constant training and sustainable management planning.
                </p>
            </div>
        </div>
    );
};

export default Environment;
