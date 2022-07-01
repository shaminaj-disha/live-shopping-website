import React from 'react';
import Banner from './Banner';
import DataStat from './DataStat';
import LiveVideo from './LiveVideo';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner />
            <LiveVideo />
            <Stat />
            <DataStat />
        </div>
    );
};

export default Home;