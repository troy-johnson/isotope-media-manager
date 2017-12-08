import React, { Component } from 'react'
import '../App.css'
import Create from './crud/create'
import Update from './crud/update'
import Delete from './crud/delete'

class Admin extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3'>Admin</h1>
          <main>
          
            <p>
              <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#create-collapse" aria-expanded="false" aria-controls="create-collapse">Create</button>
              <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#update-collapse" aria-expanded="false" aria-controls="update-collapse">Update</button>
              <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#delete-collapse" aria-expanded="false" aria-controls="delete-collapse">Delete</button>
            </p>

            <div className="collapse" id="create-collapse">
              <div className="card card-body">
                <h3>Create</h3>
                <Create />
              </div>
            </div>
            <div className="collapse" id="update-collapse">
              <div className="card card-body">
                <h3>Update</h3>
                <Update />
              </div>
            </div>
            <div className="collapse" id="delete-collapse">
              <div className="card card-body">
                <h3>Delete</h3>
                <Delete />
              </div>
            </div>

          {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="create-tab" data-toggle="tab" href="#create" role="tab" aria-controls="home" aria-selected="true"><b>Create</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="update-tab" data-toggle="tab" href="#update" role="tab" aria-controls="profile" aria-selected="false"><b>Update</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="delete-tab" data-toggle="tab" href="#delete" role="tab" aria-controls="contact" aria-selected="false"><b>Delete</b></a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade" id="create" role="tabpanel" aria-labelledby="create-tab"><Create /></div>
            <div className="tab-pane fade" id="update" role="tabpanel" aria-labelledby="update-tab"><Update /></div>
            <div className="tab-pane fade" id="delete" role="tabpanel" aria-labelledby="delete-tab"><Delete /></div>
          </div> */}

          </main>  
        </div>
      </div>  
    );
  }
}

export default Admin;