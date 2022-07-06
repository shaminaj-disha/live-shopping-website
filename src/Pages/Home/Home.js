import React, { useEffect } from 'react';
import Banner from './Banner';
import Blog from './Blog';
import DataStat from './DataStat';
import LiveShopping from './LiveShopping';
import LiveVideo from './LiveVideo';
import Logos from './Logos';
import PersonalShopping from './PersonalShopping';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cards from './Cards';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Rechart from './Rechart';
import CustomerReviews from './CustomerReviews';
import LiveShoppingVideos from './LiveShoppingVideos/LiveShoppingVideos.js';
import TeamWork from './TeamWork/TeamWork';

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <Banner />
            <Cards />
            <FeaturedProducts />
            <LiveVideo />
            <Rechart />
            <LiveShoppingVideos />
            <PersonalShopping />
            <CustomerReviews />
            <TeamWork />
            <DataStat />
            <Blog />
            <LiveShopping />
            <Logos />
        </div>
    );
};

export default Home;