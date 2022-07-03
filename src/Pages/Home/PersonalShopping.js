import React from 'react';

const PersonalShopping = () => {
    return (
        <div className="hero min-h-screen bg-base-100 py-8 px-4">
            <div className='bg-base-100 lg:mx-36 p-8'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='ml-12'>
                        <div className="avatar">
                            <div className="w-48 rounded">
                                <img src="https://placeimg.com/192/192/people"alt=''/>
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-48 rounded">
                                <img src="https://placeimg.com/192/192/people" alt=''/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-7xl font-bold">Personal Shopping‍ One-to-One</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi possimus ex quia impedit, laudantium eum saepe vero quisquam nobis expedita natus, sed et amet aspernatur magni. Inventore assumenda molestiae fugit.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalShopping;