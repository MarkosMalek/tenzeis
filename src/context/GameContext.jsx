import { createContext, useRef, useState, useEffect, useCallback } from "react";

const GameContext = createContext();

// eslint-disable-next-line react/prop-types
export function GameProvider({ children }) {
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

  const handleCellClick = useCallback(
    (cellID) => {
      if (
        sellectedNumber === null ||
        sellectedNumber === cells[cellID].number
      ) {
        setCells((preCells) =>
          preCells.map((cell, index) =>
            index === cellID ? { ...cell, clicked: true } : cell
          )
        );
        setSellectedNumber(cells[cellID].number);
      }
    },
    [sellectedNumber, cells]
  );

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
    <GameContext.Provider
      value={{
        cells,
        handleCellClick,
        handleGameStatues,
        gameStatues,
        buttonRef,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export { GameContext };
