import React, { useState } from "react";
import "./App.css";
import { gameContext } from "./components/Context/gameContext";
import FinishPage from "./components/FinishPage/FinishPage";
import LandingPage from "./components/LandingPage/LandingPage";
import QuizPage from "./components/QuizPage/QuizPage";
import Wrapper from "./components/Wrapper/Wrapper";

const App = () => {
  const [gameState, setGameState] = useState("landingPage");
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <div className="main-container">
      <Wrapper className="App">
        <gameContext.Provider
          value={{
            gameState,
            setGameState,
            score,
            setScore,
            topScore,
            setTopScore,
            username,
            setUsername,
          }}
        >
          {gameState === "landingPage" && <LandingPage />}
          {gameState === "quizPage" && <QuizPage />}
          {gameState === "finishPage" && <FinishPage />}
        </gameContext.Provider>
      </Wrapper>
    </div>
  );
};

export default App;
