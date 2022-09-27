import React from 'react';
import welcomeSideImg from '../../../images/welcome_side_img.jpg';
import lightOn from '../../../images/light_on_icon.png';

const Introduction = () => {
    const introStyle = {
        wordSpace: {
            wordSpacing: 5,
        },
        lightOnIcon: {
            maxWidth: 100,
            width: '100%',
            marginTop: '-15px',
        },
        title: {
            fontSize: 60,
        },
    };
    return (
        <div className="row ">
            <div className="col-md-6 py-5">
                <div className="d-flex align-items-center pb-2">
                    <img src={lightOn} alt="" style={introStyle.lightOnIcon} />
                    <h1 style={introStyle.title}>Introduction</h1>
                </div>
                <div className="fs-5 lh-lg pb-5 mb-5">
                    <p style={introStyle.wordSpace} className="lead">
                        M/s Jahanara Construction & Supllier company started its journey from the day of commencement of the company in 2012 by the hand of its owner Md.
                        Barkatullah Sagor along with a group of talented, creative and trained personnel with a vision and mission to serve in the advancement and development of
                        construction sector and to provide the highest quality construction on schedule and within budget.
                    </p>
                    <p style={introStyle.wordSpace} className="lead">
                        The Chairman Md.Barkartullah Sagor respectively Construction is a costly, multiplex and challenging process which requires expert and experienced handling.
                        M/s Jahanara Construction & Supplier provides the required expertise to face these challenges head-on. Our company’s objective is to offer our clients with
                        the utmost quality experience, competitive pricing, professionalism, commitment to projects and finally a finished project without any delay. We promise to
                        do so by using our latest technology and techniques through innovative planning and strategies
                    </p>
                    <p style={introStyle.wordSpace} className="lead">
                        We believe in putting our customers first and that is what our team strives to achieve. We can proudly say that we have built a very strong and well-managed
                        team by going through an intense selection process who are confident to achieve our goals and objectives with full accuracy.
                    </p>
                </div>
            </div>
            <div className="col-md-6">
                <img src={welcomeSideImg} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default Introduction;
