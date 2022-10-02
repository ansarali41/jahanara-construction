import React, { useEffect } from 'react';
import Banner from './HomeComponents/Banner';
import './Home.css';
import Welcome from './HomeComponents/Welcome';
import MissionVisions from './HomeComponents/MissionVisions';
import Review from '../Review/Review';
import Culture from './HomeComponents/Culture';
import Commitments from './HomeComponents/Commitments';
// import NewStep from './HomeComponents/NewStep';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mt-5 pt-4">
            <Banner />
            <Welcome />
            <MissionVisions />
            <Culture />
            <Commitments />
            <Review />
            {/*
            <NewStep />*/}
        </div>
    );
};

export default Home;
