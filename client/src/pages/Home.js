import React from 'react';
import RecipeList from '../components/RecipeList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RecipeList recipes={recipes} title="" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
