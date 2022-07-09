function SubmitButton(props) {
  return (
    <button onClick={() => checkResult(props.solution, props.selectedCells)}>
      Submit
    </button>
  );
}

function checkResult(solution, selectedCells) {
  console.log(solution);
  console.log(selectedCells);
  if (solution.length === selectedCells.length) {
    if (solution.sort().toString() === selectedCells.sort().toString()) {
      console.log(true);
    } else {
      console.log("second false");
    }
  } else {
    console.log("Wrong solution!");
  }
  console.log("test");
}

export default SubmitButton;
