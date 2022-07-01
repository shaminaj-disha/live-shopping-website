import React from 'react';

const Stat = () => {
    return (
        <div className="lg:flex stats-vertical lg:stats-horizontal my-8">

            <div className="stat place-items-center">
                <div className="stat-value text-7xl">13 min</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-value text-7xl">31%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">69 tasks remaining</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-value text-7xl">24%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">76 tasks remaining</div>
            </div>

        </div>
    );
};

export default Stat;