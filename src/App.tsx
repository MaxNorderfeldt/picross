import { useState } from "react";
import "./App.css";
import Grid from "./Grid";
import SubmitButton from "./SubmitButton";
import RefreshButton from "./RefreshButton";
import GenerateSolutionButton from "./GenerateSolutionButton";

function App() {
  const [selectedCells, setSelectedCells] = useState([]);
  const solution = [
    "3.3",
    "3.4",
    "3.5",
    "3.6",
    "3.7",
    "3.8",
    "3.9",
    "3.10",
    "3.11",
    "3.12",
  ];

  const helpNumbers = [
    "     23  02  ",
    "   2410 00031  ",
    "[],[]   01009600119",
    " 2323",
    "142232",
    "123",
    "421",
    "123",
    "123",
    "12",
    "12",
    "12",
    "12",
  ];

  const gridSize = 10;

  return (
    <div>
      <Grid
        selectedCells={selectedCells}
        setSelectedCells={setSelectedCells}
        helpNumbers={helpNumbers}
        gridSize={gridSize}
      ></Grid>
      <SubmitButton
        selectedCells={selectedCells}
        solution={solution}
      ></SubmitButton>
      <RefreshButton></RefreshButton>
      <GenerateSolutionButton
        selectedCells={selectedCells}
      ></GenerateSolutionButton>
    </div>
  );
}

export default App;
