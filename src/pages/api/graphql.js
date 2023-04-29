import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// start the server and wait for it to be ready before calling createHandler()
await server.start();

// create the request handler function
const handler = server.createHandler({ path: '/api/graphql' });

// export the request handler function
export default handler;