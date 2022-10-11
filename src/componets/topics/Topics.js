import React from 'react';

const Topics = ({topic}) => {
    const {name,logo} = topic;
    return (
        <div className='bg-gray-500 grid md:grid-cols-1 p-2'>
            <img className=' w-64' src={logo} alt="" srcset="" />
            <div className='flex mt-10'>
                <p className='mt-3'>{name}</p>
                <button className='ml-6 p-3 rounded-md w-full bg-zinc-600'>Start Quiz</button>
            </div>
            
        </div>
    );
};

export default Topics;