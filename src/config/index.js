import ApolloClient, { HttpLink } from 'apollo-client-preset'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cj9bgskq640420132tefvmu1v'
  }),
});

export {
  client,
}