import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import home from './pages/home'
import notfound from './pages/notfound'
import library from './pages/library'
import admin from './pages/admin'
import detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <div className='App-wrapper'>
              <header>
                <div>
                  <h3>Black Ice Media Manager</h3>
                  <nav className='navbar navbar-expand-lg mb-1 top-bar navbar-static-top'>
                    <div className='container'>
                      <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarCollapse1' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                      </button>
                      <div className='collapse navbar-collapse' id='navbarCollapse1'>
                      <hr />
                        <ul className='navbar-nav ml-auto'>
                          <li className='nav-item active'><a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a></li>
                          <li className='nav-item'><a className='nav-link' href='/library'>Library</a></li>
                          <li className='nav-item'><a className='nav-link' href='/admin'>Admin</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </header>
            <main role='main'>
            </main>
            <div className='Routes'>
              <Router>
                <Switch>
                  <Route exact path='/' component={home} />
                  <Route path='/library' component={library} />
                  <Route exact path='/detail' component={detail} />
                  <Route path='/admin' component={admin} />
                  <Route component={notfound} />
                </Switch>
              </Router>
            </div>
          </div>
    );
  }
}

export default App;
