import React, { Component } from 'react';
import '../App.css';

class Crud extends Component {
  render() {
    return (
      <div className="mdc-text-field">
        <input type="text" id="my-text-field" className="mdc-text-field__input" />
        <label className="mdc-text-field__label" for="my-text-field">Hint text</label>
        <div className="mdc-text-field__bottom-line"></div>
      </div>
    );
  }
}

export default Crud;