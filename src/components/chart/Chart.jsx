import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from '../../constants/chat';

import './chart.css';

const Chart = () => {
    return (
        <div className='chart-container'>
            <h3 className='chartTitle'>User Analytics</h3>

            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke='#5550bd' />
                    {/* <YAxis dataKey='name' /> */}
                    <Line type='monotone' dataKey='Active User' stroke='#5550bd' />
                    <Tooltip />
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart