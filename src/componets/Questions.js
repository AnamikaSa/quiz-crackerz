import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ ques }) => {
    const { id, options, question, correctAnswer } = ques;
    // console.log(question);
    const handleA = (ans) => {
        if (ans === correctAnswer) {
            toast.info("Answer is Correct");
        }
        else {
            toast.error(`Wrong Answer!! Answer is :  ${correctAnswer}`);
        }
    }
    return (
        <div>
            <p className='mt-6 bg-zinc-300 p-10 ml-20 mr-20'>Question: {question}</p>
            {
                options?.map((op) => <div> <button className='p-3 bg-gray-400 mt-3 w-64' onClick={() => handleA(op)}>{op}</button> </div>)

            }
            <ToastContainer/>
        </div>
    );
};

export default Questions;