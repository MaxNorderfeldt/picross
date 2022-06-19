import { useState } from "react";
import Cell from "./Cell";

function Grid(props) {
  const [mouseDown, setMouseDown] = useState(false);
  // Build the rows in an array
  let rows = [];
  for (let y = 0; y < 10; y++) {
    // Build the cells in an array
    const cells = [];
    for (let x = 0; x < 10; x++) {
      cells.push(
        <Cell setMouseDown={setMouseDown} mouseDown={mouseDown} x={x} y={y} />
      );
    }
    // Put them in the row
    rows.push(<tr>{cells}</tr>);
  }
  // Return the table
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Grid;
