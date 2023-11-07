import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: "1",
          name: "Ahmad",
          lastName: "Kamali",
        },
        {
          id: "2",
          name: "Mahmood",
          lastName: "Rahimi",
        },
        {
          id: "3",
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
            <div key={monster.id}>
              <h1>
                {monster.name}
                {monster.lastName}
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
