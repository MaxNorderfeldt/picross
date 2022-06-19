import { useState } from "react";
import Cell from "./Cell";
import HelpNumber from "./HelpNumber";

function Grid(props) {
  const [mouseDown, setMouseDown] = useState(false);

  // Build the rows in an array

  let rows = [];
  for (let y = 0; y < 13; y++) {
    // Build the cells in an array
    const cells = [];
    for (let x = 0; x < 13; x++)
      if (x > 2 && y > 2) {
        cells.push(
          <Cell
            setMouseDown={setMouseDown}
            mouseDown={mouseDown}
            x={x}
            y={y}
            setSelectedCells={props.setSelectedCells}
            selectedCells={props.selectedCells}
          />
        );
      } else {
        let helpnumber = props.helpNumbers[y].charAt(x);
        cells.push(<HelpNumber helpNumber={helpnumber} x={x} />);
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
