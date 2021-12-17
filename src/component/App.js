import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <h2 className="Tittle">Ingresa tu Cedula</h2>
        <Display value={this.state.next || this.state.total || "."} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
