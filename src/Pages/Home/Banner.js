import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 py-8 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl lg:ml-12" alt='' />
                <div>
                    <h1 className="text-3xl md:text-7xl font-bold">World-Leading Live Video Shopping</h1>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum quia labore maiores odio blanditiis minima a praesentium. Recusandae totam quaerat molestias ea quisquam facere iste explicabo illo excepturi similique!.</p>
                    {/* <div className='flex px-6'> */}
                        <button className="btn btn-outline btn-primary mr-4">Get Started</button>
                        <button className="btn btn-primary">Pricing</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;