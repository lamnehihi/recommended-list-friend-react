import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RecommendedFriends from "./components/RecommendedFriends";

class App extends Component {
  constructor() {
    console.log("App constructor");
    super();
    this.friends = [
      {
        name: "Thanh Lam",
        avatar: "https://picsum.photos/id/200/300",
      },
      {
        name: "Phuc Doan",
        avatar: "https://picsum.photos/id/140/300/300",
      },
      {
        name: "Phi Hung",
        avatar: "https://picsum.photos/id/100/300/300",
      },
    ];
  }
  render() {
    console.log("App rendering");
    return (
      <div>
        <RecommendedFriends friends={this.friends} />
      </div>
    );
  }
}

export default App;
