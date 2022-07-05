import React, { useEffect } from 'react';
import Banner from './Banner';
import Blog from './Blog';
import DataStat from './DataStat';
import EffectCreativeSlider from './EffectCreativeSlider/EffectCreativeSlider';
import FreeModeSlider from './FreeModeSlider/FreeModeSlider';
import LiveShopping from './LiveShopping';
import LiveVideo from './LiveVideo';
import Logos from './Logos';
import PersonalShopping from './PersonalShopping';
// import Stat from './Stat';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cards from './Cards';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Rechart from './Rechart';
import CustomerReviews from './CustomerReviews';

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <Banner />
            <Cards />
            {/* <Logos /> */}
            <FeaturedProducts />
            <LiveVideo />
            <Rechart />
            {/* <div className='transition ease-out duration-500 hover:bg-slate-800 hover:text-slate-400'>
                <Stat />
            </div> */}
            <FreeModeSlider />
            <PersonalShopping />
            <CustomerReviews />
            <EffectCreativeSlider />
            <DataStat />
            <Blog />
            <LiveShopping />
            <Logos />
        </div>
    );
};

export default Home;