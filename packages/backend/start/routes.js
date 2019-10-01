'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const ApolloServer = use('ApolloServer')
const schema = require('../app/Data/schema')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.route('/graphql', ({ request, auth, response}) => {

  return ApolloServer.graphql({
    schema,
    context: { auth }
  }, request, response)

}, ['GET', 'POST'])

Route.get('/graphiql', ({ request, response }) => {
    return ApolloServer.graphiql({ endpointURL: '/graphql' }, request, response)
})

// Route.post('/api/register', 'AuthController.register')
// Route.post('/api/register', () => {
//   return { greeting: 'register' }
// })

// Route.post('/api/login', 'AuthController.login')
