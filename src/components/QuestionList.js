import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions,setQuestions] = useState([])
  useEffect(
    ()=>{
      fetch('http://localhost:4000/questions')
      .then(res=>res.json())
      .then(data=>setQuestions(data))
      
    }
  ,[])
  // console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map((question)=><QuestionItem question={question}></QuestionItem>)}
    </section>
  );
}

export default QuestionList;
