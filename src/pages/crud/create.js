import React, { Component } from 'react';
import '../../App.css';

class Create extends Component {
  render() {
    return (
      <div>
        <h2>Create</h2>
        <input type="text" id="create-name" placeholder='Enter Title' required/>
        <label for="create-name"></label>
        <input type="text" id="create-medium" placeholder='Enter Medium' required/>
        <label for="create-medium"></label>
        <button>Create!</button>
      </div>
    );
  }
}

export default Create;