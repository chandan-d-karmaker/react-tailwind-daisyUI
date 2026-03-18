import React from 'react';
import {use} from 'react'
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
const MarksBarChart = ({MarksPromise}) => {

    const marksRes = use(MarksPromise);
    const marksData = marksRes.data;
    console.log(marksData);
    return (
        <div>

            <BarChart width={1000} height={500} data={marksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey='physics' fill='red'></Bar>
                <Bar dataKey='chemistry' fill='green'></Bar>
                <Bar dataKey='math' fill='blue'></Bar>
            </BarChart>
            
        </div>
    );
};

export default MarksBarChart;