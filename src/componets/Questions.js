import React from 'react';

const Questions = ({que}) => {
    const {id,options}=que;
    return (
        <div>
            <p>{id}</p>
            <p>{options}</p>
        </div>
    );
};

export default Questions;