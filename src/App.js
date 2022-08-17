import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams name="Luna" animal="dog" breed="Havanese" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
