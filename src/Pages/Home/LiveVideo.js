import React from 'react';

const LiveVideo = () => {
    return (
        <div className="hero min-h-screen bg-base-100 py-8">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl lg:mr-12" alt='' />
                <div>
                    <h1 className="text-7xl font-bold">Live Video Shopping One-to-Many</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam eveniet corporis, provident corrupti impedit delectus ipsum, a molestiae, architecto ullam pariatur commodi velit maiores inventore necessitatibus debitis enim ducimus?</p>
                    {/* <div className='flex px-6'> */}
                        <button className="btn btn-primary mr-4">Get Started</button>
                        <button className="btn btn-outline btn-primary">Learn More</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default LiveVideo;