import React from 'react';

const Stat = () => {
    return (
        <div className="lg:flex stats-vertical lg:stats-horizontal container lg:my-32 pt-12 mx-auto">

            <div data-aos="zoom-in-right" className="stat place-items-center">
                <div className="stat-value text-7xl">13 min</div>
                <div className="stat-title text-xl">Tasks done</div>
                <div className="text-secondary text-sm">31% tasks remaining</div>
            </div>

            <div data-aos="zoom-in-up" className="stat place-items-center">
                <div className="stat-value text-7xl">31%</div>
                <div className="stat-title text-xl">Tasks done</div>
                <div className="text-secondary ">69 tasks remaining</div>
            </div>

            <div data-aos="zoom-in-left" className="stat place-items-center">
                <div className="stat-value text-7xl">24%</div>
                <div className="stat-title text-xl">Tasks done</div>
                <div className="text-secondary ">76 tasks remaining</div>
            </div>

        </div>
    );
};

export default Stat;