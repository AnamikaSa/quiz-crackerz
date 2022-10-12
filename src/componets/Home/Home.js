import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../topics/Topics';

const Home = () => {
    const t = useLoaderData();
    // console.log(t);

    // const handleAdd=t=>{
    //     console.log(t);
    // }
    return (
        <div>
            <p className='mt-5 font-bold'>A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills.</p>

            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-x-20 md:gap-y-24 gap-y-10 mt-24 p-5 rounded-md'>
                {
                
                t.data.map (topic => <Topics
                    key={topic.id}
                    topic={topic}
                    // handleAdd={handleAdd}
                    ></Topics>)
            }
            </div>
            
        </div>
    );
};

export default Home;