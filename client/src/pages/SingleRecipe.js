import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_RECIPE } from '../utils/queries';

const SingleRecipe = props => {
  const { id: recipeId } = useParams();

  const { loading, data } = useQuery(QUERY_RECIPE, {
    variables: { id: recipeId }
  });

  const recipe = data?.recipe || {};

  if (loading) {
    return <div>Loading recipes...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
          {recipe.username}
          </span>{" "}
        </p>
        <div className="card-body">
          <p>{recipe.recipeText}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
