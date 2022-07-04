import React from 'react';

const LiveShopping = () => {
    return (
        <div className="hero min-h-screen bg-base-200 py-8 px-4">
            <div className='bg-base-100 lg:mx-36 p-8'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-left" src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl lg:ml-12" alt='' />
                    <div data-aos="fade-right">
                        <h1 className="text-2xl md:text-5xl font-bold">Get started with Live Shopping today</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi possimus ex quia impedit, laudantium eum saepe vero quisquam nobis expedita natus, sed et amet aspernatur magni. Inventore assumenda molestiae fugit.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveShopping;