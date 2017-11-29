import React, { Component } from 'react'
import './App.css'

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
          <nav>
            <ul>
              <a href='/'><li>Home</li></a>
              <a href='/library'><li>Library</li></a>
              <a href='/admin'><li>Admin</li></a>
            </ul>
          </nav>
        </header>
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
