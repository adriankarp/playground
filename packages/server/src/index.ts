import config from './config/index';
import app from './app';
import graphqlServer from './graphql';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import pkg from 'body-parser';

const { json } = pkg;

const start = async () => {
  try {
    await graphqlServer.start();
    await app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(graphqlServer)
    );
    await app.listen(config.PORT);
    console.log(`🚀  GraphQL server running at port: ${config.PORT}`);
  } catch {
    console.log('Unable to start GraphQL server');
  }
};

start();
