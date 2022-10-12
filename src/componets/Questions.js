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
            toast.error("Wrong Answer");
        }
        console.log(ans);
    }
    return (
        <div>
            <p>Question: {question}</p>
            {
                options?.map((op, i) => <div> <button onClick={() => handleA(op)}>{op}</button> </div>)

            }
            <ToastContainer/>
        </div>
    );
};

export default Questions;