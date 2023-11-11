import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionsList, setQuestions] = useState([]);

  useEffect(() => {
  
    fetch('http://localhost:4000/questions')
      .then((res) => res.json())
      .then((questionsList) => setQuestions(questionsList));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsList.map((item) => (
          // Use item.id as the key prop
          <QuestionItem key={item.id} question={item} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
