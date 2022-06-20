function SubmitButton(props) {
  return (
    <button onClick={() => checkResult(props.solution, props.selectedCells)}>
      Submit
    </button>
  );
}

function checkResult(solution, selectedCells) {
  if (solution.length == selectedCells.length) {
    a;
    if (solution.toString() === selectedCells.sort().toString()) {
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
