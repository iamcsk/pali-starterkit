const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')


const typeDefs = `
 type User {
     id: Int!
     username: String!
     email: String!     
 }

 type Query {
     allUsers: [User]
     user(id: Int!): User
 }


 type Mutation {
     login (email: String!, password: String!): String
     createUser (username: String!, email: String!, password: String!): User
 }
`

module.exports = makeExecutableSchema( { typeDefs, resolvers} )