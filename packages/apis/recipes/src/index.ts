import config from './config/index';
import app from './app';

const start = async () => {
  try {
    await app.listen(config.PORT);
    console.log(`🚀  GraphQL server running at port: ${config.PORT}`);
  } catch {
    console.log('Unable to start GraphQL server');
  }
};

start();
