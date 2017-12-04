import React, { Component } from 'react'
import '../App.css'
import Create from './crud/create'
import Update from './crud/update'
import Delete from './crud/delete'

class Admin extends Component {
  render() {
    return (
      <div>
        <h2 className='display-3'>Admin</h2>
        <main>

          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="create-tab" data-toggle="tab" href="#create" role="tab" aria-controls="home" aria-selected="true">Create</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="update-tab" data-toggle="tab" href="#update" role="tab" aria-controls="profile" aria-selected="false">Update</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="delete-tab" data-toggle="tab" href="#delete" role="tab" aria-controls="contact" aria-selected="false">Delete</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade" id="create" role="tabpanel" aria-labelledby="create-tab"><Create /></div>
            <div className="tab-pane fade" id="update" role="tabpanel" aria-labelledby="update-tab"><Update /></div>
            <div className="tab-pane fade" id="delete" role="tabpanel" aria-labelledby="delete-tab"><Delete /></div>
          </div>
        </main>  
      </div>
    );
  }
}

export default Admin;