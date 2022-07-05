import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 py-8 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div data-aos="fade-left" class="avatar">
                    <div class="w-50 lg:w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=''/>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <h1 className="text-3xl md:text-7xl font-bold">World-Leading Live Video Shopping</h1>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum quia labore maiores odio blanditiis minima a praesentium. Recusandae totam quaerat molestias ea quisquam facere iste explicabo illo excepturi similique!.</p>
                    {/* <div className='flex px-6'> */}
                    <button className="btn btn-outline mr-4">Get Started<ArrowRightIcon className='w-4 h-4 ml-2 text-black'></ArrowRightIcon></button>
                    <button className="btn btn-primary text-white">Pricing</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;