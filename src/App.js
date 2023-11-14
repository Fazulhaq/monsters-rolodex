import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list-components";
import SearchBox from "./components/search-box/search-box-component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState("Monsters Rolodex");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onChangeSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onChangeTitle = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setTitle(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onChangeSearch}
        placeHolder="search monsters"
      />
      <br />
      <SearchBox
        className="title-box"
        onChangeHandler={onChangeTitle}
        placeHolder="change title"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
