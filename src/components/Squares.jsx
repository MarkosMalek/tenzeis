import Square from "./Square";
import useGame from "../hooks/useGame";
function Squares() {
  const { cells } = useGame();
  return (
    <div className="squares">
      {cells.map((cell, index) => (
        <Square key={index} cell={cell} index={index} />
      ))}
    </div>
  );
}

export default Squares;
