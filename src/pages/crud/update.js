// React
import React, { Component } from 'react' 

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import '../../App.css';

class Create extends Component {

  state = {
      format: '',
      image: '',
      movieDb: '',
      name: '',
      yearReleased: '',
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.mutate({
      variables: { format: this.state.format, 
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
    const { format, image, movieDb, name, yearReleased }  = this.state
    return (
      <div>
        <h2>Create</h2>
        <form onSubmit={this.onSubmit}>
          <input type='text' name='format' value={format} onChange={e => this.setState({ format: e.target.value })} placeholder='Format' />
          <input type='text' name='image' value={image} onChange={e => this.setState({ image: e.target.value })} placeholder='Image URL' />
          <input type='text' name='movieDb' value={movieDb} onChange={e => this.setState({ movieDb: e.target.value })} placeholder='The movieDb URL' />
          <input type='text' name='name' value={name} onChange={e => this.setState({ name: e.target.value })} placeholder='Title' />
          <input type='number' name='yearReleased' step='1' min='1800' max={new Date().getFullYear() + 2} value={yearReleased} onChange={e => this.setState({ yearReleased: e.target.value })} placeholder='Year Released'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const MUTATION = gql`
  mutation createMedia($format: String!, $image: String!, $movieDb: String!, $name: String!, $yearReleased: Int!) {
    createMedia(format: $format, image: $image, movieDb: $movieDb, name: $name, yearReleased: $yearReleased) {
      id
      name
    }
  }  
`

export default graphql(MUTATION)(Create)