import React from 'react';
import Arrow from '../../logos/arrow-right.svg';

const PersonalShopping = () => {
    return (
        <div className="lg:relative hero min-h-screen bg-base-100 py-8 px-4 my-8 lg:my-28">
            <div className='bg-base-100 lg:mx-36 p-8'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos="fade-down-left" className='lg:ml-12 lg:sticky lg:top-0 lg:z-50'>
                        <div className="avatar">
                            <div className="w-48 rounded">
                                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80://placeimg.com/192/192/people" alt='' />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-48 rounded">
                                <img src="https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80" alt='' />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down-right">
                        <h1 className="text-3xl md:text-7xl font-bold">Personal Shopping‍ One-to-One</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi possimus ex quia impedit, laudantium eum saepe vero quisquam nobis expedita natus, sed et amet aspernatur magni. Inventore assumenda molestiae fugit.</p>
                        <div className='mb-8'>
                            <button className="btn btn-primary text-white mr-4">Get Started</button>
                            <button className="btn btn-outline">Learn More</button>
                        </div>
                        <div className='flex justify-center align-center mt-8 font-bold'>
                            <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Directly  on your e-commerce site</h4>
                        </div>
                        <div className='flex justify-center align-center mt-8 font-bold'>
                            <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Directly  on your e-commerce site</h4>
                        </div>
                        <div className='flex justify-center align-center mt-8 font-bold'>
                            <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Directly  on your e-commerce site</h4>
                        </div>
                        <div className='flex justify-center align-center mt-8 font-bold'>
                            <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Directly  on your e-commerce site</h4>
                        </div>
                        <div className='flex justify-center align-center mt-8 font-bold'>
                            <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Directly  on your e-commerce site</h4>
                        </div>
                        <div className='flex justify-center align-center mt-8 font-bold'>
                            <img src={Arrow} alt="" width="20px" /><h4 className='text-xl ml-4'>Directly  on your e-commerce site</h4>
                        </div>
                        <div className='mt-8'>
                            <button className="btn btn-primary text-white mr-4">Get Started</button>
                            <button className="btn btn-outline">Explore One-to-Many</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalShopping;