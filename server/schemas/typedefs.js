const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  recipes: [Recipe]
}

type Recipe {
  _id: ID
  recipeText: String
  username: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
  recipes(username: String): [Recipe]
  recipe(_id: ID!): Recipe
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addRecipe( recipeText: String!): Recipe
}
`;

module.exports = typeDefs;
