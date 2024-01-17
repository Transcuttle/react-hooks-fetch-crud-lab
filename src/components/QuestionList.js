import React, { useContext } from "react";
import QuestionItem from "./QuestionItem";
import { QuestionContext } from "./QuestionContext";

function QuestionList() {
  const {questions} = useContext(QuestionContext)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
