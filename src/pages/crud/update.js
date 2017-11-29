import React, { Component } from 'react';
import '../../App.css';

class Update extends Component {
  render() {
    return (
      <div>
        <h2>Update</h2>
        <input type="text" id="update-id" placeholder='Enter ID'/>
        <label for="update-id"><button>Update!</button></label>
      </div>
    );
  }
}

export default Update;