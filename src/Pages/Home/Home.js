import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import DataStat from './DataStat';
import LiveShopping from './LiveShopping';
import LiveVideo from './LiveVideo';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner />
            <LiveVideo />
            <Stat />
            <DataStat />
            <Blog />
            <LiveShopping />
        </div>
    );
};

export default Home;