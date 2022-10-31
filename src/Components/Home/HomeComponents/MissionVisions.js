import React from 'react';
import MyDivider from '../../../Common/Components/MyDivider';
// import missionBanner from '../../../images/mission_banner.jpg';
import missionIcon from '../../../images/mission_icon.png';
import visionIcon from '../../../images/vision_icon.png';

const MissionVisions = () => {
    const missionStyle = {
        icon: {
            marginTop: '-15px',
        },
    };
    return (
        <div className="py-5 pt-5 px-2 bg-light ">
            {/* Mission section */}
            {/* <div>
                <img src={missionBanner} alt="" className="img-fluid" />
            </div> */}
            <div className="d-flex justify-content-center pb-3 pt-1">
                <div className="d-flex align-items-center">
                    <img src={missionIcon} alt="" className="img-fluid w-25" style={missionStyle.icon} />
                    <h1>Mission</h1>
                </div>
            </div>
            <div>
                <div className="pb-3">
                    <MyDivider width="80px" background="rgb(5, 174, 239)" height="10px" />
                </div>
                <p className="lead">
                    Dedication to providing quality construction, SUPPLIES and management services to our customers. We will strive to implement a long term relationship with our
                    clients, based on safety, quality, timely service and anicipation of their needs. To help fulfill this mission, we will treat all employees fairly and involve
                    them in the quality improvement process to Ensure responsiveness and cost effective work execution
                </p>
                <div className="py-3">
                    <MyDivider width="80px" background="rgb(5, 174, 239)" height="10px" />
                </div>
                <p className="lead">
                    Our success is driven by some of the most advanced facilities for the corporate, Industrial and government clients. More and more of our clients are turning to
                    us for our distinctive ability to implement innovative project management techniques and to serve as a reliable providers of knowledge driven solutions for
                    their complex construction projects
                </p>
            </div>
            {/* Vision section */}
            <div className="py-4 pb-1">
                <div className="d-flex justify-content-center py-3">
                    <div className="d-flex align-items-center">
                        <img src={visionIcon} alt="" className="img-fluid w-25" style={missionStyle.icon} />
                        <h1>Visions</h1>
                    </div>
                </div>
                <div className="pb-3">
                    <MyDivider width="80px" background="rgb(5, 174, 239)" height="10px" />
                </div>
                <p className="lead">
                    To become the leading construction firm, while delivering projects that consistently exceed international standards and provide exceptional customer
                    satisfaction. To continually deliver excellent value & innovative construction solutions to meet our clients' requirements.
                </p>
                <p className="lead">
                    Using modern principles and sophisticated technologies, M/s Jahanara Construction & Supplier envisions being the primary preference at all times both nationally
                    and globally, for their renowned excellence, quality, performance and reliability in all types of constructions.
                </p>
            </div>
        </div>
    );
};

export default MissionVisions;
