import React from 'react';

const DataStat = () => {
    return (
        <div class="lg:flex stats-vertical lg:stats-horizontal my-8">

            <div class="stat place-items-center">
                <div class="stat-value text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <h4 class="font-bold text-2xl">Data and Insights</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores sapiente harum esse architecto unde doloribus! Nihil dignissimos laboriosam illo est maiores, eligendi aliquid voluptatum vel minus nisi corrupti et?</p>
                <button className='btn btn-wide btn-primary mt-4'>Get Started</button>
            </div>

            <div class="stat place-items-center">
                <div class="stat-value text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h4 class="font-bold text-2xl">ADA Compliance</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laboriosam voluptatum quos ullam. Architecto autem quod exercitationem dolores eum blanditiis, quia repudiandae reiciendis cumque quaerat explicabo, laudantium repellendus nulla rerum.</p>
                <button className='btn btn-wide btn-primary mt-4'>Get Started</button>
            </div>

            <div class="stat place-items-center">
                <div class="stat-value text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 class="font-bold text-2xl">Global Coverage</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure eum, sed dolore, soluta iusto ex commodi beatae consectetur doloremque atque rerum nam ea ullam odit accusantium maxime tempora at!</p>
                <button className='btn btn-wide btn-primary mt-4'>Get Started</button>
            </div>

        </div>
    );
};

export default DataStat;