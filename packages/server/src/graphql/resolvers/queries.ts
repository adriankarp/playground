const recipeQueries = {
  recipes: async (_, args) => {
    return 'multiple';
  },

  recipe: async (_, args) => {
    return 'single';
  }
};

export default recipeQueries;
