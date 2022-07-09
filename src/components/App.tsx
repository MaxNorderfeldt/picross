import React from "react";
import HelpNumber from "./HelpNumber";
import Picross from "./Picross";

function App() {
  const route = window.location.pathname;

  if (route === "/about") return <HelpNumber helpNumber={3} />;
  return (
    <React.Fragment>
      <Picross />
      <a href="/about">testButton</a>
    </React.Fragment>
  );
}

export default App;
