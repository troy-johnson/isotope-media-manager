// React
import React, { Component } from 'react' 

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import '../../App.css';

class Update extends Component {

  state = {
      id: '',
      format: '',
      image: '',
      movieDb: '',
      name: '',
      yearReleased: '',
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.mutate({
      variables: { id: this.state.id,
                   format: this.state.format, 
                   image: this.state.image,
                   movieDb: this.state.movieDb,
                   name: this.state.name,
                   yearReleased: Number.parseInt(this.state.yearReleased, 10)
                }
    })
      .then(({ data }) => {
        console.log('got data', data)
    }).catch((error) => {
        console.log('there was an error sending the query', error)
    })
  }

  render() {
    const { id, format, image, movieDb, name, yearReleased }  = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className='row'>
            <div className='col'>
              <input className='form-control' type='text' name='id' value={id} onChange={e => this.setState({ id: e.target.value })} placeholder='ID' /> 
              <input className='form-control' type='text' name='format' value={format} onChange={e => this.setState({ format: e.target.value })} placeholder='Format' />
              <input className='form-control' type='text' name='image' value={image} onChange={e => this.setState({ image: e.target.value })} placeholder='Image URL' />
            </div>
            <div className='col'>
              <input className='form-control' type='text' name='movieDb' value={movieDb} onChange={e => this.setState({ movieDb: e.target.value })} placeholder='The movieDb URL' />
              <input className='form-control' type='text' name='name' value={name} onChange={e => this.setState({ name: e.target.value })} placeholder='Title' />
              <input className='form-control' type='number' name='yearReleased' step='1' min='1800' max={new Date().getFullYear() + 2} value={yearReleased} onChange={e => this.setState({ yearReleased: e.target.value })} placeholder='Year Released'/>
            </div>
          </div>
          <button className='btn btn-info' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const MUTATION = gql`
  mutation updateMedia($id: ID!, $format: String!, $image: String!, $movieDb: String!, $name: String!, $yearReleased: Int!) {
    updateMedia(id: $id, format: $format, image: $image, movieDb: $movieDb, name: $name, yearReleased: $yearReleased) {
      id
      name
    }
  }  
`

export default graphql(MUTATION)(Update)