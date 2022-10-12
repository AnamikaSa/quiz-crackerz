import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Graph from './Graph';


const Statistic = () => {
    const s=useLoaderData();
    return (
        <div>
            {
                s.data.map (statistic=> <Graph
                key= {statistic.id}
                statistic={statistic}
                ></Graph>)
            }
        </div>
    );
};

export default Statistic;