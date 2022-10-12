import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Questions from './Questions';

const Quiz = () => {
    const ques= useLoaderData().data.questions;
    console.log(ques);
    return (
        <div>
            <p>{ques[0].question}</p>
            {/* {
            ques.map (que =><Questions
            key={que.id}
            ques={que}
            ></Questions>)
} */}
        </div>
    );
};

export default Quiz;