import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import DataStat from './DataStat';
import LiveShopping from './LiveShopping';
import LiveVideo from './LiveVideo';
import Logos from './Logos';
import PersonalShopping from './PersonalShopping';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner />
            <Logos />
            <LiveVideo />
            <Stat />
            <PersonalShopping />
            <DataStat />
            <Blog />
            <LiveShopping />
            <Logos />
        </div>
    );
};

export default Home;