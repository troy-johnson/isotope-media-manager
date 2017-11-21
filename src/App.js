import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './cover.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import home from './pages/home'
import notfound from './pages/notfound'
import library from './pages/library'
import admin from './pages/admin'
import detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <header className="masthead clearfix">
                <div className="inner">
                  <h3 className="masthead-brand">Cover</h3>
                  <nav className="nav nav-masthead">
                    <a className="nav-link active" href={home}>Home</a>
                    <a className="nav-link" href={library}>Library</a>
                    <a className="nav-link" href={admin}>Admin</a>
                  </nav>
                </div>
              </header>
            <main role="main" className="inner cover">
            <h1 className="cover-heading">Cover your page.</h1>
            <p className="lead">Cover is a one-page template <a href={home}>for</a> building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p className="lead">
              <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
            </p>
            <div className="Routes">
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
          </main>

        </div>

      </div>

    </div>
      </div>
    );
  }
}

export default App;
