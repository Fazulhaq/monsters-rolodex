import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list-components";
import SearchBox from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      );
  }

  onChangeSearch = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onChangeSearch } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onChangeSearch}
          placeHolder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
