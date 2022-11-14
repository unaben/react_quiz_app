import React, { useState, useContext } from "react";
import { gameContext } from "../Context/gameContext";
import { questions } from "../Data";
import Quiz from "../QuizPage/QuizPage.styles.css";

const QuizPage = () => {
  const { gameState, setGameState, score, setScore } = useContext(gameContext);
  const [quizIndex, setQuizIndex] = useState(0);

  return (
    <Quiz
      score={score}
      setScore={setScore}
      gameState={gameState}
      setGameState={setGameState}
      questions={questions}
      quizIndex={quizIndex}
      setQuizIndex={setQuizIndex}
    />
  );
};

export default QuizPage;
