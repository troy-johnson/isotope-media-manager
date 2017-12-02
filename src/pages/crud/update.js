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
        <h2>Update</h2>
        <form onSubmit={this.onSubmit} action='#'>
          <div className='mdl-textfield mdl-js-textfield'>
            <input type='text' name='id' className='mdl-textfield__input' id='id-field' value={id} onChange={e => this.setState({ id: e.target.value })} />
            <label className='mdl-textfield__label' htmlFor='id-field'>Enter ID</label>
            <button type='submit'>Submit</button>
          </div>  
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