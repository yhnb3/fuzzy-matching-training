import { useState } from "react";

import "./App.css";
import FuzzyMatch from "./components/FuzzyMatch";
import { fuzzyMatchingRegExp } from "./utils/fuzzyMathcingRegExp";

const TEST_STRING = ["크리스마스", "크마스", "스마스"];

function App() {
  const [value, setValue] = useState("");
  const [regExpString, setRegExpString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegExpString(fuzzyMatchingRegExp(value));
  };

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value}></input>
        <div>
          {TEST_STRING.map((searchValue) => {
            if (regExpString.length === 0)
              return <p key={searchValue}>{searchValue}</p>;
            return (
              <FuzzyMatch
                key={searchValue}
                value={searchValue}
                regExpString={regExpString}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default App;
