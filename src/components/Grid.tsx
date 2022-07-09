import { FC, useEffect, useState } from "react";
import Cell from "./Cell";
import HelpNumber from "./HelpNumber";
let helpNumbers = require("./helpNumbers.json");

console.log(helpNumbers.helpNumbers1);

function Grid(props) {
  const [mouseDown, setMouseDown] = useState(false);
  let gridSize = props.gridSize;

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  function onMouseDown() {
    setMouseDown(true);
  }

  function onMouseUp() {
    setMouseDown(false);
  }

  let rows = [];
  let helpNumberCounterX = 0;
  let helpNumberCounterY = 0;
  for (let y = 0; y < gridSize + helpNumberCounterY; y++) {
    // Build the cells in an array
    let cells: Array<JSX.Element> = [];
    for (let x = 0; x < gridSize + helpNumberCounterX; x++)
      if (x >= helpNumberCounterX && y >= helpNumberCounterY) {
        cells.push(
          <Cell
            key={x + "" + y}
            x={x}
            y={y}
            setSelectedCells={props.setSelectedCells}
            selectedCells={props.selectedCells}
            mouseDown={mouseDown}
          />
        );
      } else {
        let helpnumber = props.helpNumbers[y].charAt(x);
        if (helpnumber !== " ") {
          helpnumber = Number(helpnumber) + 1;
        }
        cells.push(
          <HelpNumber key={x + "" + y} helpNumber={helpnumber} x={x} />
        );
      }

    // Put them in the row
    rows.push(<tr key={y}>{cells}</tr>);
  }
  // Return the table
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Grid;
