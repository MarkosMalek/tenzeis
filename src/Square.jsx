/* eslint-disable react/prop-types */
function Square(props) {
  return (
    <button
      className={props.cell.clicked ? "square-clicked" : "square-unClicked"}
      onClick={() => props.handleClick(props.index)}
    >
      {props.cell.number}
    </button>
  );
}

export default Square;
