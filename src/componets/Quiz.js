import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quiz = () => {
    const ques= useLoaderData().data.questions;
    console.log(ques);
    return (
        <div>
            {
            ques.map (ques=><Questions
            key={ques.id}
            ques={ques}
            ></Questions>)
}
        </div>
    );
};

export default Quiz;