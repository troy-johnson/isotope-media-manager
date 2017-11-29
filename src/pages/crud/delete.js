import React, { Component } from 'react';
import '../../App.css';

class Delete extends Component {
  render() {
    return (
      <div>
        <h2>Delete</h2>
        <input type="text" id="delete" placeholder='Enter ID'/>
        <label for="delete"><button onClick=''>Delete!</button></label>
      </div>
    );
  }
}

export default Delete;