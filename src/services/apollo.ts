import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "MY_GRAPHQL_ENDPOINT -need to add",
  cache: new InMemoryCache(),
});

export default client;
