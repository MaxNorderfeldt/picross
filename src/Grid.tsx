import Cell from "./Cell";

function Grid(props) {
  // Build the rows in an array
  let rows = [];
  for (let y = 0; y < 10; y++) {
    // Build the cells in an array
    const cells = [];
    for (let x = 0; x < 10; x++) {
      cells.push(<Cell x={x} y={y} />);
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
