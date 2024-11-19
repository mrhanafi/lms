import { createContext, useEffect, useState } from "react";
import services from '@/utils/services';


export const QuestionContext = createContext();

export const QuestionProvider = ({children}) => {
    const [answers, setAnswers] = useState({});
    const [questions, setQuestions] = useState({});
    

    const handleAnswerChange = (questionId, answer) => {
        // setAnswers({
        //     "questionId":questionId,
        //     "answer":answer
        // })

        setAnswers({  ...answers,[questionId]: answer });


        // setAnswers({ ...answers, "questionId": [questionId],"answer": answer });
        // console.log(answers)
    };

    useEffect(()=>{
        console.log(answers)
    },[answers])

    const fetchQuestions = async () => {
        const set = await services.getData('questions');
        setQuestions(JSON.parse(set));
        // console.log('fromContext',JSON.parse(set));

        return JSON.parse(set);
    }

    // const questionSet = await JSON.parse(services.getData('questions'));

    return (
        <QuestionContext.Provider value={{ handleAnswerChange,fetchQuestions,questions,answers,setAnswers }}>{children}</QuestionContext.Provider>
    )

}