import React from 'react';
import RecipeForm from '../components/RecipeForm';
import Auth from '../utils/auth';

const Add = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <RecipeForm />
          </div>
        )}      
      </div>
    </main>
  );
};

export default Add;
