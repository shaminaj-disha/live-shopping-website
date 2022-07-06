import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json') //fetch data from data.json file in public folder
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div className='container mx-auto my-2 lg:mt-16'>
            <h3 className='text-3xl lg:text-4xl font-bold py-8'>Investment VS Revenue Chart</h3>
                <div data-aos="fade-up">
                    <h1 className='text-sky-400/100 font-bold'>Investment vs Revenue</h1>

                    {/*Drawing Chart */}
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart className='mx-auto'
                            data={data}
                            margin={{
                                top: 50,
                                bottom: 50
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
        </div>
    );
};

export default Rechart;