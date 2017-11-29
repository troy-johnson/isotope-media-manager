import React, { Component } from 'react'
import '../App.css'
import Create from './crud/create'
import Update from './crud/update'
import Delete from './crud/delete'

class Admin extends Component {
  render() {
    return (
      <div>
        <h2>Admin Page</h2>
        <main>
          <Create />
          <Update />
          <Delete />
        </main>  
      </div>
    );
  }
}

export default Admin;