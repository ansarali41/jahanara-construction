import React from 'react';
import welcomeSideImg from '../../../images/image/intro-pic.JPG';
import lightOn from '../../../images/light_on_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import LinkTo from '../../../Common/Components/LinkTo';
import { useLocation } from 'react-router-dom';

const Introduction = () => {
    let location = useLocation();
    console.log(location.pathname);
    const introStyle = {
        lightOnIcon: {
            maxWidth: 60,
            width: '100%',
            marginTop: '-10px',
        },
    };
    return (
        <div className="row mt-5 pt-5">
            {/* image section */}
            <div className="col-md-6">
                <img src={welcomeSideImg} alt="" className="img-fluid" />
            </div>
            {/* text section */}
            <div className="col-md-6">
                <div className="d-flex align-items-center py-3">
                    <img src={lightOn} alt="" style={introStyle.lightOnIcon} />
                    <h1>Introduction</h1>
                </div>
                <div>
                    <p className="lead">
                        M/s Jahanara Construction & Supllier company started its journey from the day of commencement of the company in 2012 by the hand of its owner Md.
                        Barkatullah Sagor along with a group of talented, creative and trained personnel with a vision and mission to serve in the advancement and development of
                        construction sector and to provide the highest quality construction on schedule and within budget.
                    </p>
                    <p className="lead">
                        The Chairman Md.Barkartullah Sagor respectively Construction is a costly, multiplex and challenging process which requires expert and experienced handling.
                    </p>
                </div>
            </div>

            <div className="mb-4">
                <div className="col-md-12">
                    <p className="lead">
                        M/s Jahanara Construction & Supplier provides the required expertise to face these challenges head-on. Our company’s objective is to offer our clients with
                        the utmost quality experience, competitive pricing, professionalism, commitment to projects and finally a finished project without any delay. We promise to
                        do so by using our latest technology and techniques through innovative planning and strategies
                    </p>
                    <p className="lead">
                        We believe in putting our customers first and that is what our team strives to achieve. We can proudly say that we have built a very strong and well-managed
                        team by going through an intense selection process who are confident to achieve our goals and objectives with full accuracy.
                    </p>
                    {location.pathname === '/about' ? null : (
                        <h5 className="font-weight-bold">
                            <LinkTo to="/about">
                                <FontAwesomeIcon icon={faRightLong} style={{ marginRight: 10 }} />
                                LEARN MORE ABOUT US
                            </LinkTo>
                        </h5>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Introduction;
