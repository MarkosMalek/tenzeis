/* eslint-disable react/prop-types */
import useGame from "../hooks/useGame";

function Square({ cell, index }) {
  const { handleCellClick } = useGame();
  return (
    <button
      className={cell.clicked ? "square-clicked" : "square-unClicked"}
      onClick={() => handleCellClick(index)}
    >
      {cell.number}
    </button>
  );
}

export default Square;
