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
          <nav className="mdc-permanent-drawer mdc-typography">
            <div className="mdc-permanent-drawer__toolbar-spacer"></div>
            <div className="mdc-permanent-drawer__content">
              <nav id="icon-with-text-demo" className="mdc-list">
                <a className="mdc-list-item mdc-permanent-drawer--selected" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
                </a>
                <a className="mdc-list-item" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
                </a>
              </nav>
            </div>
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
