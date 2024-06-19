import React, { useState } from "react";

const Question = () => {
  const [question, setQuestion] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    console.log(question.includes("?"));
    if (question.includes("?")) {
      setText(`Your Question: ${question}`);
    } else {
      setText(`Your Question: ${question}?`);
    }
  };

  return (
    <div>
      <label>Ask your question: </label>
      <textarea
        cols={50}
        rows={5}
        onChange={(e) => setQuestion(e.target.value)}></textarea>
      <button onClick={clickHandler}>Submit Question</button>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Question;
