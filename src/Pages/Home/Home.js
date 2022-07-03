import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import DataStat from './DataStat';
import EffectCreativeSlider from './EffectCreativeSlider/EffectCreativeSlider';
import FreeModeSlider from './FreeModeSlider/FreeModeSlider';
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
            <div className='transition ease-out duration-1000 hover:bg-slate-800 hover:text-slate-400'>
                <Stat />
                <FreeModeSlider />
            </div>
            <PersonalShopping />
            <EffectCreativeSlider />
            <DataStat />
            <Blog />
            <LiveShopping />
            <Logos />
        </div>
    );
};

export default Home;