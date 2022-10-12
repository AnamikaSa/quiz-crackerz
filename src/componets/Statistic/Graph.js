import React from 'react';
import { Bar, BarChart, LineChart,Line, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const Graph = ({statistic}) => {
    const{total, name}=statistic;
    const data=[
        {
            n: name,
            t: total
        }
    ]
    // const n=name;
    // const t=total;
    return (
        <div>

            < BarChart width={600} height={400} data={data}>
                    <Line type="monotone" className='p-5 m-5' dataKey="t" stroke="#8884d8" tick={data} />
                    <XAxis dataKey="n" className='p-5 m-5' />
                    <YAxis dataKey="t" className='p-5 m-5' />
                    <Bar dataKey="t" className='p-5 m-5' barSize={20} fill="#8884d8"
                        label={data} />
                    <Tooltip></Tooltip>
                    <Legend/>
                </BarChart>

        </div>
    );
};

export default Graph;