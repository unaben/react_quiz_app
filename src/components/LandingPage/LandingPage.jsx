import React, { useContext } from "react";
import { gameContext } from "../Context/gameContext";
import "../LandingPage/LandingPage.styles.css";

const LandingPage = () => {
  const { setGameState, topScore, username, setUsername } =
    useContext(gameContext);
  const handleStartGame = () => {
    if (username.trim().length > 0) {
      setGameState("quizPage");
    } else {
      return;
    }
  };

  return (
    <div className="landingPage-wrapper">
      <h1 className="header">Welcome to Quiz Game!</h1>
      <h3 className="primary_text">Please enter your username.</h3>
      <input
        type="text"
        className="username_input"
        placeholder="Enter username ..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="start_btn" onClick={handleStartGame}>
        Let's play
      </button>

      <div className="top_score">
        <p>
          Top score: <span>{topScore}</span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
