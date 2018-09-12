import React, { Component } from "react";

export default class about extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">About Contact Manager</h1>
        <p className="lead">Simple app to manage contacts</p>
        <p className="text-secondary">
          Version <strong>1.0.0</strong>
        </p>
      </div>
    );
  }
}
