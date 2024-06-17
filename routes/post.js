async function PostRoutes(fastify, options) {
    fastify.get('/post', async (request, reply) => {
        const query = '{ add(x: 2, y: 2) }'
        return reply.graphql(query)
    });
  }
  
  module.exports = PostRoutes;