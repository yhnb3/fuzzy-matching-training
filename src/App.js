import { useState } from "react";

import "./App.css";
import SearchResult from "./components/SearchResult";

function App() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("dissNameCodeList.json")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.response.body.items.item;
        setSearchResult(newData);
      });
  };

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value}></input>
        <SearchResult datas={searchResult} searchText={value} />
      </form>
    </div>
  );
}

export default App;
