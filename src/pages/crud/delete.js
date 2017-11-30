// React
import React, { Component } from 'react' 

// GraphQL & graph.cool
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// CSS
import '../../App.css';

// https://www.apollographql.com/docs/react/basics/mutations.html#graphql-mutation-options

const MUTATION = gql`
  mutation deleteMedia($id: String!) {
    deleteMedia(id: $id) {
      id
    }
  }  
`

class Delete extends Component {
  
  onClick() {
    this.props.mutate({
      variables: { repoFullName: 'apollographql/apollo-client' }
    })}}
  
  render() {

const Delete = (props) => {

  return (
    <div>
      <h2>Delete</h2>
      <input type="text" id="delete" placeholder='Enter ID'/>
      <label for="delete"><button onClick={this.onClick.bind(this)}>Delete!</button></label>
    </div>
  )

}

export default graphql(MUTATION)(Delete)

const Delete = (props) => {

  return (
    <div>
      <h2>Delete</h2>
      <input type="text" id="delete" placeholder='Enter ID'/>
      <label for="delete"><button onClick={e => props.mutate({
        variables: {
          id: cjamtxrrp77zd01178g2vmwao
        }
      })}>Delete!</button></label>
    </div>
  )

}

class NewEntry extends Component {
  onClick() {
    this.props.mutate({
      variables: { repoFullName: 'apollographql/apollo-client' }
    })}}
