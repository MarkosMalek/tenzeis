import useGame from "../hooks/useGame";
import Squares from "./Squares";
import Confetti from "react-confetti";
function GameUI() {
  const { gameStatues, handleGameStatues, buttonRef } = useGame();
  return (
    <div className="container">
      {gameStatues && <Confetti />}
      <div>
        <h1 className="title">Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <Squares className="squares" />

      <button ref={buttonRef} onClick={handleGameStatues}>
        {gameStatues ? "New Game" : "Roll"}
      </button>
    </div>
  );
}

export default GameUI;
