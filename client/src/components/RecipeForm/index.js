import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../../utils/mutations';
import { QUERY_RECIPES, QUERY_ME } from '../../utils/queries';

const RecipeForm = () => {
  const [recipeText, setText] = useState("");

  const [addRecipe] = useMutation(ADD_RECIPE, {
    update(cache, { data: { addRecipe } }) {
      try {
        const { recipes } = cache.readQuery({ query: QUERY_RECIPES });
        cache.writeQuery({
          query: QUERY_RECIPES,
          data: { recipes: [addRecipe, ...recipes] }
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, recipes: [...me.recipes, addRecipe] } }
      });
    }
  });

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addRecipe({
        variables: { recipeText }
      });

      setText('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-9'>
        <div className='card'>
          <h4 className='card-header'>Add to the CookBuddy</h4>
          <div className='card-body'>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Recipe Text"
          value={recipeText}
          className="form-input-recipe w-100"
          onChange={handleChange}
        ></textarea>
        <button className="btn d-block w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
      </div>
    </main>
  );
};

export default RecipeForm;
