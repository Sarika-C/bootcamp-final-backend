const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!

    addDiet(input: DietInput!):Diet!

    addHealth(input: HealthInput!):Health!

    addTriedRecipe(input: TriedRecipeInput!):TriedRecipe!
    delTriedRecipe(input: TriedRecipeInput!):[TriedRecipe!]!

    addBookmark(input: BookmarkInput!): Bookmark!
    delBookmark(input: BookmarkInput!): [Bookmark!]!
    
  }

  type Query {
    allUsers: [User!]!
    userViewer: User!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    triedRecipes: [TriedRecipe!]!
    bookmarks: [Bookmark!]!
    diets: [Diet!]!
    healths: [Health!]!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    id: ID!
  }

  type Diet {
    id: ID!
    restriction: String!
  }

  input DietInput {
    restriction: String!    
  }

  type Health {
    id: ID!
    restriction: String!
  }

  input HealthInput {
    restriction: String!    
  }

  type TriedRecipe {
    id: ID!
    apiID: String!
    link: String!
    createdAt: Date!
    updatedAt: Date!
  }

  input TriedRecipeInput {
    apiID: String!
    link: String!
  }

  type Bookmark {
    id: ID!
    apiID: String!
    link: String!
    createdAt: Date!
    updatedAt: Date!
  }

  input BookmarkInput {
    apiID: String!
    link: String!    
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  scalar Date
`
