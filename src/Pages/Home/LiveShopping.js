import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline'

const LiveShopping = () => {
    return (
        <div className="hero min-h-screen bg-base-200 p-8 mx-auto">
            <div className="hero-content p-8 lg:mx-12 bg-base-100 flex-col lg:flex-row-reverse">
                <div data-aos="fade-left">
                    <div class="w-50 lg:w-80">
                        <img src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=''/>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Get Started With Live Shopping Today</h1>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum quia labore maiores odio blanditiis minima a praesentium. Recusandae totam quaerat molestias ea quisquam facere iste explicabo illo excepturi similique!.</p>
                    <button className="btn btn-primary text-white">Get Started<ArrowRightIcon className='w-4 h-4 ml-2 text-White'></ArrowRightIcon></button>
                </div>
            </div>
        </div>
    );
};

export default LiveShopping;