import Fastify, { FastifyInstance } from 'fastify';
import mercurius from 'mercurius';
import { connect } from './database';
import PostType from './schema/typeDefs/post.typeDefs';
import PostResolvers from './schema/resolvers/post.resolver';

const app: FastifyInstance = Fastify();

connect().then(() => {
  console.log("Connected to MongoDB");
  
  app.register(mercurius, {
    resolvers: PostResolvers,
    schema: PostType,
    graphiql: true
  });

  app.listen(4000, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})