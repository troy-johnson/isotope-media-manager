// React
import React, { Component } from 'react' 

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import '../../App.css';

class Delete extends Component {

  onClick() {
    this.props.mutate({
      variables: { id: '' }
    })
      .then(({ data }) => {
        console.log('got data', data);
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }
  
  render() {

    return (

      <div>
        <h2>Delete</h2>
        <input type='text' id='delete' placeholder='Enter ID'/>
        <label for='delete'><button onClick={this.onClick.bind(this)} type='submit'>Delete!</button></label>
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