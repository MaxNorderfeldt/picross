import React, { useEffect, useState } from "react";
import "../styling/picross.css";
import Grid from "./Grid";
import SubmitButton from "./SubmitButton";
import RefreshButton from "./RefreshButton";
import GenerateSolutionButton from "./GenerateSolutionButton";

import { getCourses } from "../api/solutionsApi";

function Picross() {
  const [selectedCells, setSelectedCells] = useState([]);
  const [solution, setSolution] = useState([]);

  useEffect(() => {
    getCourses().then((courses) => setSolution(courses));
  }, []);

  console.log(solution);

  //   const solution = [
  //     "3.3",
  //     "3.4",
  //     "3.5",
  //     "3.6",
  //     "3.7",
  //     "3.8",
  //     "3.9",
  //     "3.10",
  //     "3.11",
  //     "3.12",
  //   ];

  const gridSize = 10;

  return (
    <React.Fragment>
      <Grid
        selectedCells={selectedCells}
        setSelectedCells={setSelectedCells}
        // helpNumbers={helpNumbers}
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
    </React.Fragment>
  );
}

export default Picross;
