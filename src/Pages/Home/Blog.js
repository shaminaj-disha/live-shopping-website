import React from 'react';

const Blog = () => {
    return (
        <div className='py-8'>
            <h2 className='text-4xl font-bold'>Blog</h2>
            <div className='lg:flex my-8 container mx-auto'>
                <div data-aos="flip-left" className='m-4 p-4 cursor-pointer hover:opacity-80'>
                    <img src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1656658136~exp=1656658736~hmac=6a9a7508676d29c6d3ab1f74c59153f00f1b9d2d97d1384f7e4e6aaeecf1ac75&w=826" alt="" />
                    <h4 className='text-2xl'>The 3 Best Ways to Create Meaningful Live Shopping Content</h4>
                </div>
                <div data-aos="flip-up" className='m-4 p-4 cursor-pointer hover:opacity-80'>
                    <img src="https://img.freepik.com/free-photo/website-design-content-layout-graphic_53876-21203.jpg?t=st=1656656662~exp=1656657262~hmac=77d6a6ac303083903a4eef8c33f14fc4e5a711388a6491028eb07a02be611788&w=826" alt="" />
                    <h4 className='text-2xl'>Give Your Customers the Power to Vote with Polls</h4>
                </div>
                <div data-aos="flip-right" className='m-4 p-4 cursor-pointer hover:opacity-80'>
                    <img src="https://img.freepik.com/free-photo/web-design-internet-website-responsive-software-concept_53876-124757.jpg?t=st=1656651651~exp=1656652251~hmac=a73b9c5b06c1da458e8b7023a828a055a26effa5430d35c781de6d722196f396&w=826" alt="" />
                    <h4 className='text-2xl'>Client highlights June 2022</h4>
                </div>
            </div>
        </div>
    );
};

export default Blog;