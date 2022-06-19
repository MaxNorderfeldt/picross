import { useState } from "react";
import "./App.css";
import Grid from "./Grid";
import SubmitButton from "./SubmitButton";
import RefreshButton from "./RefreshButton";

function App() {
  const [selectedCells, setSelectedCells] = useState([]);
  const [helpNumbers, setHelpNumbers] = useState([
    "     21   21  ",
    "   293021903",
    "   21381i23219",
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
      <SubmitButton selectedCells={selectedCells}></SubmitButton>
      <RefreshButton></RefreshButton>
    </div>
  );
}

export default App;
