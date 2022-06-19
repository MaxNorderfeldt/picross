import { useState } from "react";
import "./cell.css";

function Cell(props) {
  const [active, setActive] = useState(false);
  const [blocked, setBlocked] = useState(false);

  function handleMouseEnter() {
    if (props.mouseDown && !blocked) {
      setActive(!active);
    }
  }

  function handleMouseDown() {
    if (!blocked) {
      setActive(!active);
    }
    props.setMouseDown(true);
  }
  function handleMouseUp() {
    props.setMouseDown(false);
  }
  function handleDoubleClick() {
    setBlocked(!blocked);
    setActive(false);
  }

  return (
    <td
      className="cell unselectable"
      id={active ? "selected" : null}
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
