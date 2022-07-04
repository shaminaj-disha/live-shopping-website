import React from 'react';
import Arrow from '../../logos/arrow-right.svg';

const LiveVideo = () => {
    // const myRef = useRef(null);
    // const executeScroll = () => myRef.current.scrollIntoView();
    return (
        <div className="lg:relative hero min-h-screen bg-base-100 mx-auto py-8 lg:px-36 mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/260/400/arch" data-aos="fade-down-right" className="lg:sticky lg:top-0 lg:z-50 max-w-sm rounded-lg shadow-2xl lg:mr-12" alt='' />
                <div data-aos="fade-down-left">
                    <h1 className="text-3xl md:text-7xl font-bold">Live Video Shopping One-to-Many</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam eveniet corporis, provident corrupti impedit delectus ipsum, a molestiae, architecto ullam pariatur commodi velit maiores inventore necessitatibus debitis enim ducimus?</p>
                    <div className='mb-8'>
                        <button className="btn btn-primary text-white mr-4">Get Started</button>
                        <button className="btn btn-outline">Learn More</button>
                    </div>
                    <div className='flex justify-center align-center mt-8 font-bold'>
                        <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Built directly into your site</h4>
                    </div>
                    <div className='flex justify-center align-center mt-8 font-bold'>
                        <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Built directly into your site</h4>
                    </div>
                    <div className='flex justify-center align-center mt-8 font-bold'>
                        <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Built directly into your site</h4>
                    </div>
                    <div className='flex justify-center align-center mt-8 font-bold'>
                        <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Built directly into your site</h4>
                    </div>
                    <div className='flex justify-center align-center mt-8 font-bold'>
                        <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Built directly into your site</h4>
                    </div>
                    <div className='flex justify-center align-center mt-8 font-bold'>
                        <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Built directly into your site</h4>
                    </div>
                    <div className='mt-8'>
                        <button className="btn btn-primary text-white mr-4">Get Started</button>
                        <button className="btn btn-outline">Explore One-to-Many</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveVideo;