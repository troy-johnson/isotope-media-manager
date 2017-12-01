// React
import React, { Component } from 'react' 

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import '../../App.css';

class Delete extends Component {

  state = {
      id: '',
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.mutate({
      variables: { id: this.state.id }
    })
      .then(({ data }) => {
        console.log('got data', data)
    }).catch((error) => {
        console.log('there was an error sending the query', error)
    })
  }

  render() {
    const { id }  = this.state
    return (
      <div>
        <h2>Delete</h2>
        <form onSubmit={this.onSubmit}>
          <input type='text' name='id' value={id} onChange={e => this.setState({ id: e.target.value })} placeholder='Enter ID'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const MUTATION = gql`
  mutation deleteMedia($id: ID!) {
    deleteMedia(id: $id) {
      id
      name
      yearReleased
    }
  }  
`

export default graphql(MUTATION)(Delete)