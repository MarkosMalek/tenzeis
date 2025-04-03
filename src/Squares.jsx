import { useContext } from "react";
import Square from "./Square";
import { cellsContext } from "./context/cellsContext";
function Squares() {
  const { cells } = useContext(cellsContext);
  return (
    <div className="squares">
      {cells.map((cell, index) => (
        <Square key={index} cell={cell} index={index} />
      ))}
    </div>
  );
}

export default Squares;
