import React, { Component } from 'react';
import '../../App.css';

class Update extends Component {
  render() {
    return (
      <div>
        <h2>Update</h2>
        <input type="text" id="update-id" placeholder='Enter ID'/>
      </div>
    );
  }
}

export default Update;