const { Schema, model } = require('mongoose');

const recipeSchema = new Schema(
  {
    recipeText: {
      type: String,
      required: 'Please add the recipe!',
      minlength: 1,
      maxlength: 5000
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
