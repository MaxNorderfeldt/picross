import { useState } from "react";
import "./cell.css";

function Cell(props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  function handleClick(e) {
    console.log(e);
    console.log("The link was clicked.");
  }

  function handleMouseEnter() {
    //setActive(!isActive);
  }

  return (
    <td
      className="cell"
      id={isActive ? "selected" : null}
      onMouseEnter={handleMouseEnter}
      onMouseDown={toggleClass}
    ></td>
  );
}

export default Cell;
