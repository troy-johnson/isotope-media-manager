import React, { Component } from 'react';
import '../App.css';

class Home extends Component {

  state = {
    username: '',
    password: '',
}

  onSubmit = (e) => {
    console.log('Username: ' + this.state.username + '\nPassword: ' + this.state.password)
  }

  render() {
    const { username, password }  = this.state
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h2>Site description</h2>
          </div>
          <div className='col'>
          <div className='card mb-3 bg-dark text-white form-group'>
            <form onSubmit={this.onSubmit}>
              <div className='row'>
                <div className='col'>
                  <input className='form-control' type='text' name='name' value={username} onChange={e => this.setState({ username: e.target.value })} placeholder='Username' required />
                </div>
                <div className='col'>
                <input className='form-control' type='password' name='password' value={password} onChange={e => this.setState({ password: e.target.value })} placeholder='Password' required/>
              </div>
            </div>
            <button className='btn btn-info' type='submit'>Login</button>
          </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;