import React, { createContext, useEffect, useState } from "react";

const QuestionContext = createContext();

function QuestionProvider({ children }){
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/questions")
        .then(r => r.json())
        .then(r => setQuestions(r))
      }, [])

    return <QuestionContext.Provider value={{questions, setQuestions}}>{ children }</QuestionContext.Provider>;
}

export {QuestionContext, QuestionProvider};