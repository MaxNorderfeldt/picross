import { useState } from "react";
import "./cell.css";

function Cell(props) {
  const [selected, setSelected] = useState(false);
  const [blocked, setBlocked] = useState(false);

  function toggleSelectedCell() {
    if (!selected) {
      props.setSelectedCells((selectedCells) => [
        ...selectedCells,
        props.x + "" + props.y,
      ]);
    } else {
      props.setSelectedCells(
        props.selectedCells.filter((x) => x !== props.x + "" + props.y)
      );
    }
    setSelected(!selected);
  }

  function handleMouseEnter() {
    if (props.mouseDown && !blocked) {
      setSelected(true);
      props.setSelectedCells((selectedCells) => [
        ...selectedCells,
        props.x + "" + props.y,
      ]);
    }
  }

  function handleMouseDown() {
    if (!blocked) {
      toggleSelectedCell();
    }
    props.setMouseDown(true);
  }
  function handleMouseUp() {
    props.setMouseDown(false);
  }
  function handleDoubleClick() {
    setBlocked(!blocked);
    setSelected(false);
  }

  return (
    <td
      className="cell unselectable"
      id={selected ? "selected" : null}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onDoubleClick={handleDoubleClick}
    >
      {blocked ? "x" : null}
    </td>
  );
}

export default Cell;
