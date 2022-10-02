import React from 'react';
// import companyImg from '../../../images/company-logo.jpg';
import ProprietorImg from '../../../images/Proprietor_img.png';

const Welcome = () => {
    const welcomeStyle = {
        textColor: {
            color: '#bcbdc0',
        },
        ProprietorImgBg: {
            background: '#04ADEF',
            maxHeight: 400,
            width: '100%',
            marginLeft: '-1px',
            paddingRight: '1px',
        },
        wordSpace: {
            wordSpacing: 5,
        },
        paragraphContainer: {},
    };
    return (
        <div>
            {/* <CompanyLogo /> */}
            <div className="d-flex justify-content-between align-items-center py-5 pb-1">
                <div>
                    <h1 style={welcomeStyle.textColor}>Welcome</h1>
                    <h2 className="">Words From Our Founder</h2>
                    {/* divider */}
                    <div className="d-flex mt-2">
                        <div style={{ width: '15%', height: 8, background: 'rgb(5, 174, 239)' }} />
                    </div>
                </div>

                <img src={ProprietorImg} className="img-fluid w-50" alt="" />
            </div>
            {/* Proprietor section */}
            {/*  <img src={companyImg} className="img-fluid" alt="" style={{ width: 100 }} /> */}
            <div style={welcomeStyle.paragraphContainer}>
                <p className="fs-5 lh-lg pb-5 mb-5 lead" style={welcomeStyle.wordSpace}>
                    M/S Jahanara Construction & Supllier. has established the tradition of 'Best management practices ' in the construction industry through integrity,
                    trustworthiness and high-quality work. In its business practices, M/s Jahanara Construction & Supllier. has consistently demonstrated two key features;
                    innovation and sustainability. The strength of M/s Jahanara Construction & Supllier. lies in its long-standing experience, the higher level of professionalism,
                    superior technical knowledge and excellent communication and networking skills. We value our employees and customers. With the mission, our success is driven by
                    more than building some of the most advanced facilities for our corporate, institutional and government clients. More and more our clients are turing to us for
                    our distinctive ability to implement innovative project management techniques and to serve as a reliable provider of knowledge-driven solution for their complex
                    construction project. In the end, I would like to request you to continue having faith in M/s Jahanara Construction & Supllier. And we promise to be with you
                    for all your construction needs.
                </p>
            </div>
        </div>
    );
};

export default Welcome;
