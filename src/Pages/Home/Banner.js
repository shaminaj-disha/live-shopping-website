import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <div className="hero min-h-screen bg-base-100 py-8 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.unsplash.com/photo-1598870783716-1c5f0f890aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" data-aos="fade-left" className="max-w-sm rounded-lg shadow-2xl lg:ml-12" alt='' />
                <div data-aos="fade-right">
                    <h1 className="text-3xl md:text-7xl font-bold">World-Leading Live Video Shopping</h1>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum quia labore maiores odio blanditiis minima a praesentium. Recusandae totam quaerat molestias ea quisquam facere iste explicabo illo excepturi similique!.</p>
                    {/* <div className='flex px-6'> */}
                    <button className="btn btn-outline mr-4">Get Started</button>
                    <button className="btn btn-primary text-white">Pricing</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;