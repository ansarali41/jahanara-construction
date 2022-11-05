import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fade } from 'react-reveal';
import { TypeAnimation } from 'react-type-animation';
import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <section id="how-we-do" className="p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 how-bg-img"></div>
                    <div className="col-xs-12 col-sm-12 col-md-6 how-contents">
                        <TypeAnimation sequence={['What We Do', 1000, '']} speed={60} wrapper="h4" repeat={Infinity} className="section-title mb-2 h1 pb-5" />

                        <ul className="list-unstyled">
                            <Fade right>
                                <div className="d-flex justify-content-center ">
                                    <FontAwesomeIcon icon={faCheckSquare} size="3x" />
                                    <li>We basically participate all government tenders which are related sand filling ,Road beds ,Girder bridges.</li>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="d-flex justify-content-center ">
                                    <FontAwesomeIcon icon={faCheckSquare} size="3x" />
                                    <li>Currently we are the largest vendor about sand supply for 4 lane project 51 kilometer.</li>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="d-flex justify-content-center ">
                                    <FontAwesomeIcon icon={faCheckSquare} size="3x" />
                                    <li>Running project now is Ashuganj River Port to Akhaura Land port 51 kilometer four lane .</li>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="d-flex justify-content-center ">
                                    <FontAwesomeIcon icon={faCheckSquare} size="3x" />
                                    <li>Supplying sand to Railway project which is being constructed by Toma Construction</li>
                                </div>
                            </Fade>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
