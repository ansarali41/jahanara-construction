import React, { useEffect } from 'react';
import MyDivider from '../../Common/Components/MyDivider';
import quality_icon from '../../images/quality_icon.png';
import Planning from '../Planning/Planning';
// database
const qualityData = [
    { id: 1, image: quality_icon },
    {
        id: 2,
        title: 'Procedures:',
        description: 'Core procedures will be established to cover each major element of the scope of work',
    },
    {
        id: 3,
        title: 'Project Document Data:',
        description:
            'A schedule indicating project titles, code numbers, drawing pre-fixes,file references, lists of files (including their locations), other data covering appropriate records of the project and their retention periods.',
    },
    {
        id: 4,
        title: 'Scope of Work:',
        description: 'This would generally follow the Terms of Reference as elaborated upon during negotiations before awarding of the commission.',
    },
    {
        id: 5,
        title: 'Project Schedule:',
        description: `An activity timescale incorporating the Client's implementation schedule and the maintenance period.`,
    },
    {
        id: 6,
        title: 'Project Organisation:',
        description:
            'The Organisation for the Project (internally and externally) will be defined including activity assignments, responsibilities, levels of authority and lines of communication.',
    },
];

const QualityPlan = () => {
    const Style = {
        card: {
            width: 380,
            height: 330,
            background: '#e6e7e9',
            borderBottom: '10px solid #04ADEF',
            borderRadius: 3,
        },
        title: {
            color: '#F58128',
        },
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mt-5 pt-5 bg-light">
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <h1>Quality Plan</h1>
                    <p className="lead text-muted">
                        <em>Typically, the Quality Plan will include:</em>
                    </p>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                {qualityData.map(card =>
                    card.id === 1 ? (
                        <div style={Style.card} className="col-md-6 col-lg-3 m-3 d-flex justify-content-center align-items-center " key={card.id}>
                            <img src={quality_icon} alt="" className="img-fluid w-50" />
                        </div>
                    ) : (
                        <div style={Style.card} className="col-md-6 col-lg-3 m-3 p-5">
                            <h4 style={Style.title} className="text-center pt-3">
                                {card.title}
                            </h4>
                            <MyDivider background="white" width="100%" height="2px" />
                            <p className=" pt-3">{card.description}</p>
                        </div>
                    ),
                )}
                {/* list */}
                <div className="row d-flex justify-content-center align-items-center">
                    <div style={Style.card} className="col-md-6 col-lg-3 m-3 p-4">
                        <ul style={{ listStyleType: 'circle' }}>
                            <li>Site conditions</li>
                            <li>Soil information</li>
                            <li>Material requirements</li>
                            <li>Pile design</li>
                            <li>Pile production</li>
                            <li>Pile point/ location</li>
                            <li>Pile load test</li>
                            <li>Appointing BUET (Bangladesh University of Engineering Technology) for evaluation of pile load test result and other laboratory tests</li>
                        </ul>
                    </div>
                    <div style={Style.card} className="col-md-6 col-lg-3 m-3 p-4">
                        <ul style={{ listStyleType: 'circle' }}>
                            <li>instructing variations and seeking approval from Clients</li>
                            <li>award of extensions of time</li>
                            <li>implementation of constructio</li>
                            <li>seeking prior approval from Clients for (machinery, materials, and quality</li>
                            <li>preparing daily progress reports</li>
                            <li>maintenance inspections</li>
                            <li>coordinating 'as-built' drawings with (Clients and monitoring the progress of the Works, etc.</li>
                        </ul>
                    </div>
                </div>

                {/* added */}
                <Planning />

                {/* details */}
                <div className="m-5 px-5">
                    <h5 style={{ color: 'red', fontWeight: 'bold' }} className="lead">
                        M/s Jahanara Construction & Supllier Company quality management system and quality assurance procedures as follows:
                    </h5>
                    <p className="lead">
                        M/s Jahanara Construction & Supllier implements an integrated management system covering quality, health, and safety, environmental and internal business
                        needs. M/S Jahanara Construction & Supllier is fully committed to the implementation of this policy which is vital to our continuing success, and for the
                        reputation and the professional satisfaction of our staff. All staff is required to implement the Quality, Safety, and Environmental policy to achieve best
                        practice within M/S Jahanara Construction & Supllier and in the wider community.
                    </p>
                    <p className="lead">
                        Our business is concerned with the services in connection with the construction, operation,and maintenance of the built environment and the protection,
                        enhancement, and maintenance of the natural environment. Our quality policy is implemented through integrated procedures that specifically target these
                        services
                    </p>
                    <p className="lead">
                        We have established and maintained an economic and effective framework for the management of processes to ensure that the services provided by M/S Jahanara
                        Construction & Supllier Company (BD) Ltd. Remains transparent and meets the requirements of clients of international standards, legislation, and management.
                    </p>
                    <p className="lead">
                        Good quality control is required to ensure high standards of workmanship and a commitment to delivering a project that is safe for users and has an
                        appropriate maintenance liability. A well-developed quality management plan also benefits the Client through the integration of quality with safety and
                        environmental management. This ultimately offers the client a better value.
                    </p>
                    <p className="lead">
                        We take an integrated approach to Quality Assurance and combines quality, safety, and environmental elements into a single system. We take into account the
                        fact that each commission is unique and so requires an individually planned approach to project management.
                    </p>
                    <p className="lead">
                        As work progresses the plan will be reviewed and revised as appropriate to ensure that it meets the project demands. This process relies on good
                        communication and the free flow of information between all parties.
                    </p>
                    <p className="lead">
                        Lower the probes from the top, effectively measuring the access tube lengths. Pull the probes simultaneously, taking CSL measurements at intervals of 50mm
                        or less from the bottom to the top of the drilled shaft.
                    </p>
                    <p className="lead">
                        As the sensors are being lowered, the C HA records, at regular depth interval, the time that the signal takes to travel from the transmitter to the receiver
                        (arrival Time), as well as the signal amplitude/energy. These two quantities are indicative for concrete quality the pair of tubes at a particular depth as
                        shown later. Defects indicated by late arrival times and significantly lower amplitude/energy signals shall be immediately reported to the Engineer.
                        Additional tests such as the offset elevation CSL testing may be required by the Engineer to further evaluate the extent of such defects.
                    </p>
                    <p className="lead">
                        The entire shaft is scanned in this fashion. The test is then repeated for each pair of tubes, allowing for the investigation of defects both along the
                        length and by quadrant. The information related to arrival time and to signal energy is shown on the CHA screen in real-time mode during the logging to
                        allow problem areas to be located immediately and checked (if required).
                    </p>
                    <p className="lead">
                        Optional after all the CSL testing has been completed, and after acceptance of drilled shaft by the Engineer, we shall remove the water in the tubes, place
                        grout tubes extending to the bottom of the access tube, and fill all-access tubes in the drilled shafts with grout.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QualityPlan;
