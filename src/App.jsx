import { useState, useRef, useEffect } from "react";
import "./App.css";
import Squares from "./Squares";
import Confetti from "react-confetti";

function App() {
  const buttonRef = useRef(null);
  const [sellectedNumber, setSellectedNumber] = useState(null);
  const [cells, setCells] = useState(
    Array(10)
      .fill(0)
      .map(() => ({
        clicked: false,
        number: Math.ceil(Math.random() * 6),
      }))
  );

  const handleCellClick = (cellID) => {
    if (sellectedNumber === null || sellectedNumber === cells[cellID].number) {
      setCells((preCells) =>
        preCells.map((cell, index) =>
          index === cellID ? { ...cell, clicked: true } : cell
        )
      );
      setSellectedNumber(cells[cellID].number);
    }
  };

  const handleGameStatues = (e) => {
    e.preventDefault();
    if (!gameStatues) {
      setCells((preCells) =>
        preCells.map((cell) =>
          !cell.clicked
            ? { ...cell, number: Math.ceil(Math.random() * 6) }
            : cell
        )
      );
    } else if (gameStatues) {
      setCells(
        Array(10)
          .fill(0)
          .map(() => ({
            clicked: false,
            number: Math.ceil(Math.random() * 6),
          }))
      );
      setSellectedNumber(null);
    }
  };

  //No need for useEffect becouse when the last square is clicked it changes the state [cells] which trigger a rerender which runs this line of code checking if the game is over or not
  let gameStatues = cells.every((cell) => cell.clicked);

  useEffect(() => {
    if (gameStatues) {
      buttonRef.current.focus();
    }
  }, [gameStatues]);
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

      <Squares
        className="squares"
        cells={cells}
        handleCellClick={handleCellClick}
      />

      <button ref={buttonRef} onClick={handleGameStatues}>
        {gameStatues ? "New Game" : "Roll"}
      </button>
    </div>
  );
}

export default App;
