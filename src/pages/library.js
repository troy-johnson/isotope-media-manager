import React, { Component } from 'react'
import '../App.css';
import { graphql } from 'react-apollo'
// import gql from 'graphql-tag'
import libraryQuery from '../config/libraryquery'
import libDelete from './crud/libDelete'

export class Library extends Component {
  render() {

    const { loading, allMedias } = this.props.data

    return (
      <div className='container-fluid'>
        <div className='jumbotron'>
          <div>
            <h2 className='display-3'>Library</h2>
          </div>
          <div className='row justify-content-center'>
            {!loading && allMedias.map(media => (
              <div key={media.id} className='card bg-dark text-white'>
                <img className='card-img' src={media.image} alt={media.name} />
                <div className='card-img-overlay'>
                  <libDelete mediaId={media.id}/>
                  <h3 className='card-title'>{media.name} ({media.yearReleased})</h3>
                  <p className='card-text'>Format: {media.format}</p>
                  <p className='card-text'>ID: {media.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const LibraryWrapper = graphql(libraryQuery)(Library)
export default LibraryWrapper