import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    const { name, logo, id } = topic;
    return (
        <div className='bg-gray-500 grid md:grid-cols-1 p-2'>
            <img className=' w-64' src={logo} alt="" />
            <div className='flex mt-10'>
                <p className='mt-3'>{name}</p>

                <Link to={`/topic/${id}`} className='ml-6 p-3 rounded-md w-full bg-zinc-600'> Start Quiz</Link>


            </div>

        </div>
    );
};

export default Topics;