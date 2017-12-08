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
        <form onSubmit={this.onSubmit} action='#'>
            <input className='form-control' id='id-delete' type='text' name='id' value={id} onChange={e => this.setState({ id: e.target.value })} placeholder='ID'/>
            <button className='btn btn-info' type='submit'>Submit</button>
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