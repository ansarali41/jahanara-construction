import React from 'react';
import Banner from './HomeComponents/Banner';
import './Home.css';
// import Welcome from './HomeComponents/Welcome';
// import Introduction from './HomeComponents/Introduction';
// import MissionVisions from './HomeComponents/MissionVisions';
// import Environment from './HomeComponents/Environment';
// import Planning from './HomeComponents/Planning';
// import Commitments from './HomeComponents/Commitments';
// import Culture from './HomeComponents/Culture';
// import NewStep from './HomeComponents/NewStep';
// import OurOrganogram from './HomeComponents/OurOrganogram';
import Machinery from './HomeComponents/Machinery';

const Home = () => {
    return (
        <div className="container">
            <Banner />
            {/* <h1 className="header-title display-3">M/S JAHANARA</h1>
            <p className="display-5">CONSTRUCTION & SUPLLIER</p> */}
            {/* <Welcome />
            <Introduction />
            <MissionVisions />
            <Environment />
            <Planning /> 
            <Commitments />
            <Culture />
            <NewStep />
            <OurOrganogram />*/}
            <Machinery />
        </div>
    );
};

export default Home;
