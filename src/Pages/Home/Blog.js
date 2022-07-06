import React from 'react';

const Blog = () => {
    return (
        <div className='py-8'>
            <div>
                <h3 className='text-2xl lg:text-4xl font-bold'>Blogs</h3>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-14 my-14'>
                    <div data-aos="flip-left" className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary hover:bg-amber-100">
                        <figure className='hover:opacity-80'><img src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1656658136~exp=1656658736~hmac=6a9a7508676d29c6d3ab1f74c59153f00f1b9d2d97d1384f7e4e6aaeecf1ac75&w=826" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 class="card-title text-left">New Shoes Arrived!<div class="badge badge-secondary">NEW</div></h2>
                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat?</p>
                            <div class="card-actions justify-start">
                                <div class="badge badge-outline hover:bg-primary hover:text-white hover:border-accent">Article</div>
                                <div class="badge badge-outline hover:bg-primary hover:text-white hover:border-accent">Product</div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-down" className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary hover:bg-amber-100">
                        <figure className='hover:opacity-80'><img src="https://img.freepik.com/free-photo/website-design-content-layout-graphic_53876-21203.jpg?t=st=1656656662~exp=1656657262~hmac=77d6a6ac303083903a4eef8c33f14fc4e5a711388a6491028eb07a02be611788&w=826" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 class="card-title text-left">New Bags in Stock!<div class="badge badge-secondary">NEW</div></h2>
                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat?</p>
                            <div class="card-actions justify-start">
                                <div class="badge badge-outline hover:bg-primary hover:text-white hover:border-accent">Article</div>
                                <div class="badge badge-outline hover:bg-primary hover:text-white hover:border-accent">Product</div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary hover:bg-amber-100">
                        <figure className='hover:opacity-80'><img src="https://img.freepik.com/free-photo/web-design-internet-website-responsive-software-concept_53876-124757.jpg?t=st=1656651651~exp=1656652251~hmac=a73b9c5b06c1da458e8b7023a828a055a26effa5430d35c781de6d722196f396&w=826" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 class="card-title text-left">25% Sale on Clothes!<div class="badge badge-secondary">HOT</div></h2>
                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat?</p>
                            <div class="card-actions justify-start">
                                <div class="badge badge-outline hover:bg-primary hover:text-white hover:border-accent">Article</div>
                                <div class="badge badge-outline hover:bg-primary hover:text-white hover:border-accent">Product</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;