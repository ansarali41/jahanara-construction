import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Dredger_Machine_6 from '../../images/machines/Dredger_Machine_6.jpg';
import Dredger_Machine_8 from '../../images/machines/Dredger_Machine_8.jpg';
import Dredger_Machine_10 from '../../images/machines/Dredger_Machine_10.jpg';
import Dredger_Machine_12 from '../../images/machines/Dredger_Machine_12.jpg';
import Excavator_4pcs from '../../images/machines/Excavator_4pcs.jpg';
import Excavator_EX200 from '../../images/machines/Excavator_EX200.jpg';

const Machines = () => {
    return (
        <div className="my-5">
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={Dredger_Machine_6} alt="" />
                    <p className="legend">06 Dredger Machine</p>
                </div>
                <div>
                    <img src={Dredger_Machine_8} alt="" />
                    <p className="legend">08 Dredger Machine</p>
                </div>
                <div>
                    <img src={Dredger_Machine_10} alt="" />
                    <p className="legend">10 Dredger Machine</p>
                </div>

                <div>
                    <img src={Dredger_Machine_12} alt="" />
                    <p className="legend">12 Dredger Machine</p>
                </div>
                <div>
                    <img src={Excavator_4pcs} alt="" />
                    <p className="legend">Excavator (EX130)-4Pcs</p>
                </div>
                <div>
                    <img src={Excavator_EX200} alt="" />
                    <p className="legend">Excavator (EX200)-4Pcs</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Machines;
