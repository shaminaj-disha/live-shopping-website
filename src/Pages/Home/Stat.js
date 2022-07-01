import React from 'react';

const Stat = () => {
    return (
        <div class="lg:flex stats-vertical lg:stats-horizontal my-8">

            <div class="stat place-items-center">
                <div class="stat-value text-7xl">13 min</div>
                <div class="stat-title">Tasks done</div>
                <div class="stat-desc text-secondary">31 tasks remaining</div>
            </div>

            <div class="stat place-items-center">
                <div class="stat-value text-7xl">31%</div>
                <div class="stat-title">Tasks done</div>
                <div class="stat-desc text-secondary">69 tasks remaining</div>
            </div>

            <div class="stat place-items-center">
                <div class="stat-value text-7xl">24%</div>
                <div class="stat-title">Tasks done</div>
                <div class="stat-desc text-secondary">76 tasks remaining</div>
            </div>

        </div>
    );
};

export default Stat;