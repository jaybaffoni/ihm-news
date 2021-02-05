import "../App.css";
import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="page">
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}
