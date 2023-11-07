import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Ahmad",
          lastName: "Kamali",
        },
        {
          name: "Mahmood",
          lastName: "Rahimi",
        },
        {
          name: "Mohammad",
          lastName: "Rahmani",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <h1>
              {monster.name}
              {monster.lastName}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default App;
