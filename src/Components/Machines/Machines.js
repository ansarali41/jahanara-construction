import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Ex130 from '../../images/machine/Ex130.JPG';
import A from '../../images/machine/A.JPG';
import B from '../../images/machine/B.jpg';
import C from '../../images/machine/C.jpg';
import D from '../../images/machine/D.jpg';
import E from '../../images/machine/E.jpg';
import W from '../../images/machine/W.jpg';
import Z from '../../images/machine/Z.jpg';
import HAMM from '../../images/machine/HAMM.JPG';

const Machines = () => {
    return (
        <div className="my-5">
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={A} alt="" />
                    {/* <p className="legend">06 Dredger Machine</p> */}
                </div>
                <div>
                    <img src={HAMM} alt="" />
                    {/* <p className="legend">08 Dredger Machine</p> */}
                </div>
                <div>
                    <img src={B} alt="" />
                    {/* <p className="legend">10 Dredger Machine</p> */}
                </div>
                <div>
                    <img src={C} alt="" />
                    {/* <p className="legend">10 Dredger Machine</p> */}
                </div>

                <div>
                    <img src={D} alt="" />
                    {/* <p className="legend">12 Dredger Machine</p> */}
                </div>
                <div>
                    <img src={E} alt="" />
                    {/* <p className="legend">12 Dredger Machine</p> */}
                </div>
                <div>
                    <img src={Ex130} alt="" />
                    {/* <p className="legend">Excavator (EX130)-4Pcs</p> */}
                </div>
                <div>
                    <img src={W} alt="" />
                    {/* <p className="legend">Excavator (EX200)-4Pcs</p> */}
                </div>
                <div>
                    <img src={Z} alt="" />
                    {/* <p className="legend">Excavator (EX200)-4Pcs</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default Machines;
