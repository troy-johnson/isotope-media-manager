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
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand'>Isotope</a>
              <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' 
              aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/library'>Library</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/admin'>Admin</a>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' id='navbarDropdown' role='button' data-toggle='dropdown' 
                  aria-haspopup='true' aria-expanded='false'>Other</a>
                  <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <a className='dropdown-item' href='https://www.themoviedb.org/?language=en'>The MovieDB</a>
                    <a className='dropdown-item' href='http://www.imdb.com/'>IMDB</a>
                  </div>
                </li>
              </ul>
              <form className='form-inline my-2 my-lg-0'>
                <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
              </form>
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
