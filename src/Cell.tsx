import { useState } from "react";
import "./cell.css";

function Cell(props) {
  const [selected, setSelected] = useState(false);
  const [blocked, setBlocked] = useState(false);

  function toggleSelectedCell() {
    if (!selected) {
      selectCell();
    } else {
      unselelectCell();
    }
  }

  function selectCell() {
    props.setSelectedCells((selectedCells) => [
      ...selectedCells,
      props.x + "" + props.y,
    ]);
    setSelected(true);
  }

  function unselelectCell() {
    props.setSelectedCells(
      props.selectedCells.filter((x) => x !== props.x + "" + props.y)
    );
    setSelected(false);
  }

  function handleMouseEnter() {
    if (props.mouseDown && !blocked && !selected) {
      selectCell();
    }
  }

  function handleMouseDown() {
    if (!blocked) {
      toggleSelectedCell();
    }
  }

  function handleDoubleClick() {
    setBlocked(!blocked);
    unselelectCell();
  }

  return (
    <td
      className="cell unselectable"
      id={selected ? "selected" : null}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      {blocked ? "x" : null}
    </td>
  );
}

export default Cell;
