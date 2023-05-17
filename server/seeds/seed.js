const db = require('../config/connection');
const { User, Recipe } = require('../models')

const recipeData = require('./recipeSeeds.json');
const userData = require('./userSeeds.json');

db.once('open', async () => {
    await User.deleteMany({});
    await Recipe.deleteMany({});


    console.log('all done!');
    process.exit(0);


})