import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline'

const LiveVideo = () => {

    return (
        <div className="hero min-h-screen bg-base-100 mx-auto py-8 lg:px-36 mt-16 lg:mt-8">
            <div className="hero-content flex-col lg:flex-row">
                <iframe width="300px" height="400px" title="YouTube video player" data-aos="fade-down-right" src="https://www.youtube.com/embed/MLsOPVxY4y0" className="max-w-sm rounded-lg shadow-2xl lg:mr-12" allowfullscreen="allowFullScreen" frameborder="0">
                </iframe>
                <div data-aos="fade-down-left">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Live Video Shopping One-to-Many</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam eveniet corporis, provident corrupti impedit delectus ipsum, a molestiae, architecto ullam pariatur commodi velit maiores inventore necessitatibus debitis enim ducimus?</p>
                    <div className='mb-8'>
                        <button className="btn btn-primary text-white mr-4">Get Started</button>
                        <button className="btn btn-outline">Learn More<ArrowRightIcon className='w-4 h-4 ml-2 text-black'></ArrowRightIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveVideo;