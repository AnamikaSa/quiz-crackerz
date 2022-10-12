import React from 'react';

const Graph = ({statistic}) => {
    const{total} =statistic;
    return (
        <div>
            <p>{total}</p>
        </div>
    );
};

export default Graph;