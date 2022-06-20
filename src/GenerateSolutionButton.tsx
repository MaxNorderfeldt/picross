function GenerateSolutionButton(props) {
  return (
    <button onClick={() => console.log(props.selectedCells.sort())}>
      Generate solution
    </button>
  );
}

export default GenerateSolutionButton;
