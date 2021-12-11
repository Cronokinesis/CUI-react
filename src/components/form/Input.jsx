import React, { Component } from 'react';

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange;
  }
  render() {
    return (
      <input
        onChange={(e) => this.onChange(e.target.value)}
        value={this.props.value}
      />
    );
  }
}
