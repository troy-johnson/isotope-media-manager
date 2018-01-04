import React, { Component } from 'react'
import '../App.css'
import Create from './crud/create'
import Update from './crud/update'
import Delete from './crud/delete'

class Admin extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='jumbotron'>
          <h1 className='display-3'>Admin</h1>
          <main>

            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#createModal">Create</button>
            <div className="modal fade" id="createModal" tabIndex="-1" role="dialog" aria-labelledby="createModalTitle" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="createModalTitle">Create</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body"><Create /></div>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#updateModal">Update</button>
            <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="updateModalTitle" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="updateModalTitle">Update</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body"><Update /></div>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#deleteModal">Delete</button>
            <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalTitle" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalTitle">Delete</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body"><Delete /></div>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    );
  }
}

export default Admin;