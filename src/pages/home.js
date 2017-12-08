import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='jumbotron'>
          <div>
              <h2 className='display-3'>Home</h2>
            </div>
          <p>Site description, login, etc.</p>
        </div>
      </div>
    );
  }
}

export default Home;