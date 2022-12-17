import { ApolloServer } from '@apollo/server';
import typeDefs from './schema';
import resolvers from './resolvers';

const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  introspection: true
});

export default apolloServer;
