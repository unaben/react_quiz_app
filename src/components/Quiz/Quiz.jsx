import React from "react";
import "../Quiz/Quiz.styles.css";
import { questions } from "../../components/questionBank";

const Quiz = ({ score, setScore, setGameState, setQuizIndex, quizIndex }) => {
  const handleClick = (isCorrect) => {
    if (quizIndex < 9) {
      if (isCorrect) {
        setScore((prevScore) => (prevScore += 100));
      }
      setQuizIndex((prevIndex) => prevIndex + 1);
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
            <div
              className="answer-btn"
              key={index}
              onClick={() => handleClick(answer.correctAnswer)}
            >
              <p>{answer.answerText}</p>
            </div>
          );
        })}
      </div>
      <div className="score-wrapper">
        <p>
          Score: <span>{score}</span>
        </p>
        <p className="question_number">
          Question <span>{quizIndex + 1}</span>/10
        </p>
      </div>
    </div>
  );
};

export default Quiz;
