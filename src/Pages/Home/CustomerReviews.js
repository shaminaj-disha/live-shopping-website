import React from 'react';
import StarRatings from 'react-star-ratings';

const CustomerReviews = () => {
    return (
        <div>
            <h3 className='text-2xl lg:text-4xl font-bold'>Latest Customer Reviews</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-14 my-14'>
                <div data-aos="flip-left" className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary">
                    <figure><div className="avatar mt-8">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='Reviewer Pic' />
                        </div>
                    </div></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Flora Watson</h2>
                        <div><StarRatings
                            rating={5}
                            starRatedColor="GoldenRod"
                            starDimension="20px"
                            starSpacing="5px"
                        /><span className='ml-2'>(5)</span></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aperiam eius facere? Voluptate iste, ea necessitatibus id non consequuntur at, repellat repellendus porro facilis nostrum aperiam! Nemo beatae earum quae.</p>
                    </div>
                </div>
                <div data-aos="flip-down" className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary">
                    <figure><div className="avatar mt-8">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='Reviewer Pic' />
                        </div>
                    </div></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Will Smith</h2>
                        <div><StarRatings
                            rating={4}
                            starRatedColor="GoldenRod"
                            starDimension="20px"
                            starSpacing="5px"
                        /><span className='ml-2'>(5)</span></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aperiam eius facere? Voluptate iste, ea necessitatibus id non consequuntur at, repellat repellendus porro facilis nostrum aperiam! Nemo beatae earum quae.</p>
                    </div>
                </div>
                <div data-aos="flip-right" className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary">
                    <figure><div className="avatar mt-8">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='Reviewer Pic' />
                        </div>
                    </div></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Emily Clark</h2>
                        <div><StarRatings
                            rating={5}
                            starRatedColor="GoldenRod"
                            starDimension="20px"
                            starSpacing="5px"
                        /><span className='ml-2'>(5)</span></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aperiam eius facere? Voluptate iste, ea necessitatibus id non consequuntur at, repellat repellendus porro facilis nostrum aperiam! Nemo beatae earum quae.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;