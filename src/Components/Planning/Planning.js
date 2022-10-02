import React, { useEffect } from 'react';
import PlanningCard from '../../Common/PlanningCard';
import planningImg from '../../images/planning.jpg';
import planningIcon from '../../images/planning-icon.png';

// database
const data = [
    { id: 2, description: 'Build effective planning to aim;' },
    { id: 3, description: 'Identify and shape your corporate culture;' },
    { id: 4, description: 'Conduct a situational of both your internal and external environments;' },
    { id: 5, description: 'Implement teamwork to achieve long-lasting results.' },
];

const Planning = () => {
    const Style = {
        icon: {
            width: 110,
        },
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="py-5 container bg-light mt-5">
            {/* 1st row */}
            <div className="row d-flex justify-content-center">
                {/* img section */}
                <div className="col-md-6">
                    <img src={planningImg} alt="" className="img-fluid" />
                </div>
                {/* text section */}
                <div className="col-md-6 p-5">
                    <div className="d-flex justify-content-center">
                        <img src={planningIcon} alt="" style={Style.icon} />
                    </div>
                    <h1>
                        Strategic <br />
                        <strong>Planning</strong>
                    </h1>
                    <p className="lead">
                        No good deal lasts forever. Because your market customers and even products and services change, you need a strategic plan that will help your company adapt
                        and grow. Strategic planning helps senior executives envision and develop the company 's future.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                        <PlanningCard id={1} description="Prepare for the planning process" />
                    </div>
                </div>
            </div>
            {/* 2nd row */}
            <div className="row d-flex justify-content-md-center justify-content-center">
                {data.map(function (card) {
                    return (
                        <div className="col-7 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <PlanningCard id={card.id} description={card.description} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Planning;
