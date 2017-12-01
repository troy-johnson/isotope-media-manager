// React
import React, { Component } from 'react' 

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import '../../App.css';

class Delete extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onClick() {
    this.props.mutate({
      variables: { id: this.state.id }
    })
      .then(({ data }) => {
        console.log('got data', data);
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }
  
  render() {
    const { id }  = this.state
    return (
      <div>
        <h2>Delete</h2>
        <form>
          <input type='text' name='id' value={id} onChange={this.onChange} placeholder='Enter ID'/>
          <button onClick={this.onClick.bind(this)} type='submit'>Delete!</button>
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