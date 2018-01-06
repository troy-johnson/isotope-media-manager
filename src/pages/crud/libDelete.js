// React
import React, { Component } from 'react'

// GraphQL
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import '../../App.css';

class libDelete extends Component {

    state = {
        id: '',
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.mutate({
            variables: { id: this.state.id }
        })
            .then(({ data }) => {
                console.log('success: node removed', data)
                alert('Great! ' + this.state.id + ' has been removed collection.')
                this.setState({
                    id: '',
                })
            }).catch((error) => {
                console.log('error: node not removed', error)
                alert('Sorry! There was an error removing ' + this.state.id + ' from your collection. Please try again or contact us.')
                this.setState({
                    id: '',
                })
            })
    }

    render() {
        const { id } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit} action='#'>
                    <input className='form-control' id='id-delete' type='text' name='id' value={id} onChange={e => this.setState({ id: e.target.value })} placeholder='ID' />
                    <button className='btn btn-info' type='submit'>Submit<i class="material-icons">delete_forever</i></button>
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

export default graphql(MUTATION)(libDelete)