import React, { useContext } from "react";
import { gameContext } from "../Context/gameContext";
import Card from "../Card/Card";
import "../FinishPage/FinishPage.styles.css";

const FinishPage = () => {
  const {
    setGameState,
    topScore,
    setTopScore,
    score,
    setScore,
    username,
    setUsername,
  } = useContext(gameContext);

  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }
    setGameState("landingPage");
    setScore(0);
    setUsername("");
  };

  return (
    <Card>
      <h1 className="headingText">
        You reach the end of the game, {username}!
      </h1>
      <h3 className="primary_text">Your final score is:</h3>
      <h3 className="final_score">{score}</h3>
      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
    </Card>
  );
};

export default FinishPage;
