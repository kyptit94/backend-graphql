'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')
const path = require('path');
const fs = require('fs');

const app = Fastify()

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

app.register(mercurius, {
  schema,
  resolvers
})

// Autoload routes from routes folder
const routesPath = path.join(__dirname, 'routes');
const routeFiles = fs.readdirSync(routesPath);

routeFiles.forEach((file) => {
    const route = require(path.join(routesPath, file));
    app.register(route);
});

app.get('/', async function (req, reply) {
  const query = '{ add(x: 2, y: 2) }'
  return reply.graphql(query)
})

app.listen({ port: 4000 })
