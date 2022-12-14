import React from "react";
import "../Quiz/Quiz.styles.css";
import { questions } from "../../components/questionBank";

const Quiz = ({ score, setScore, setGameState, setQuizIndex, quizIndex }) => {
  const handleClick = (isCorrect) => {
    if (quizIndex < 11) {
      if (isCorrect) {
        setScore((prevScore) => (prevScore += 100));
      }
      setQuizIndex((prevIndex) => prevIndex + 1);
      // const randomNum = Math.floor(Math.random() * 10);
      // setQuizIndex(randomNum);
    } else {
      if (isCorrect) {
        setScore((prevScore) => (prevScore += 100));
      }
      setGameState("finishPage");
    }
  };

  return (
    <div className="quiz-wrapper">
      <h1 className="quiz">{questions[quizIndex].questionText}</h1>
      <div className="answers-wrapper">
        {questions[quizIndex].answers.map((answer, index) => {
          return (
            <button
              className="answer-btn"
              key={index}
              onClick={() => handleClick(answer.correctAnswer)}
            >
              <p>{answer.answerText}</p>
            </button>
          );
        })}
      </div>
      <div className="score-wrapper">
        <p>
          Score: <span>{score}</span>
        </p>
        <p className="question_number">
          Question <span>{quizIndex + 1}</span>/{questions.length}
        </p>
      </div>
    </div>
  );
};

export default Quiz;
