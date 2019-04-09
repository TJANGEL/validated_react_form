import React, { Component } from "react";
import "./App.css";
import ValidatedLoginForm from "./ValidatedLoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Validated Login Form</h1>
        <ValidatedLoginForm />
      </div>
    );
  }
}

export default App;
