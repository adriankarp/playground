import recipeQueries from './queries';

export { default as recipeQueries } from './queries';

const resolvers = {
  Query: {
    ...recipeQueries
  }
};

export default resolvers;
