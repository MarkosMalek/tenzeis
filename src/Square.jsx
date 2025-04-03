/* eslint-disable react/prop-types */

import { useContext } from "react";
import { cellsContext } from "./context/cellsContext";

function Square(props) {
  const { handleCellClick } = useContext(cellsContext);
  return (
    <button
      className={props.cell.clicked ? "square-clicked" : "square-unClicked"}
      onClick={() => handleCellClick(props.index)}
    >
      {props.cell.number}
    </button>
  );
}

export default Square;
