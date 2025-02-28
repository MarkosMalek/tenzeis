/* eslint-disable react/prop-types */
import Square from "./Square";
function Squares(props) {
  return (
    <div className="squares">
      {props.cells.map((cell, index) => (
        <Square
          key={index}
          cell={cell}
          handleClick={props.handleCellClick}
          index={index}
        />
      ))}
    </div>
  );
}

export default Squares;
