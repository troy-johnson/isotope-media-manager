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
      <div className='container cover-container'>
        <div className='jumbotron'>
        <div className='row'>
          <div className='col-md'>
            <h1 className="cover-heading">Isotope</h1>
            <p className="lead">is a tool to catalogue the movies and tv shows that you own (regardless of format).</p>
          </div>
          <div className='col-md container-fluid'>
            <form onSubmit={this.onSubmit}>
              <div className='row'>
                <div className='col'>
                  <input className='form-control' type='text' name='name' value={username} onChange={e => this.setState({ username: e.target.value })} placeholder='Username' required />
                </div>
                <div className='col'>
                  <input className='form-control' type='password' name='password' value={password} onChange={e => this.setState({ password: e.target.value })} placeholder='Password' required />
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