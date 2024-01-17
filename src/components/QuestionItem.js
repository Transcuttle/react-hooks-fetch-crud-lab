import React, { useContext, useState } from "react";
import { QuestionContext } from "./QuestionContext";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex} = question;

  const {questions, setQuestions} = useContext(QuestionContext);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

    function handleDelete(){
      fetch(`http://localhost:4000/questions/${id}`, {
        method: "DELETE",
      })
      const newQuestions = questions.filter((question) => {
        if(question.id === id) return false;
        return true;
      })
      setQuestions(newQuestions);
    }

    function handleChange(e){
      const newIndex = e.target.value;
      console.log(newIndex)

      fetch(`http://localhost:4000/questions/${id}`, {
        method: "PATCH",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          correctIndex: newIndex,
        })
      })
      .then(r => r.json())
      .then(r => console.log(r))
    }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
