import { useState } from "react";
import "./App.css";
import Grid from "./Grid";
import SubmitButton from "./SubmitButton";
import RefreshButton from "./RefreshButton";
import GenerateSolutionButton from "./GenerateSolutionButton";

function App() {
  const [selectedCells, setSelectedCells] = useState([]);
  const [solution, setSolution] = useState([
    "310",
    "311",
    "312",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
  ]);
  const [helpNumbers, setHelpNumbers] = useState([
    "     21   21  ",
    "   293021903",
    "   2138123219",
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
  ]);

  return (
    <div>
      <Grid
        selectedCells={selectedCells}
        setSelectedCells={setSelectedCells}
        helpNumbers={helpNumbers}
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
