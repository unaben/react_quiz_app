import React, { useState, useContext } from "react";
import { gameContext } from "../Context/gameContext";
import Quiz from "../Quiz/Quiz";
import '../QuizPage/QuizPage.styles.css'

const QuizPage = () => {
  const { setGameState, score, setScore } = useContext(gameContext);
  const [quizIndex, setQuizIndex] = useState(0);

  return (
    <Quiz
      score={score}
      setScore={setScore}
      setGameState={setGameState}
      quizIndex={quizIndex}
      setQuizIndex={setQuizIndex}
    />
  );
};

export default QuizPage;
