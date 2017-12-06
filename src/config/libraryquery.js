import gql from 'graphql-tag'

const libraryQuery = gql`
query {
  allMedias {
    id
    image
    name
    yearReleased
    movieDb
    format
  }
}`

export default libraryQuery