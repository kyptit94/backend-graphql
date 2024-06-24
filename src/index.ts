import Fastify, { FastifyInstance } from 'fastify';
import mercurius from 'mercurius';
import { connect } from './database';
import PostType from './schema/typeDefs/post.typeDefs';
import PostResolvers from './schema/resolvers/post.resolver';
import { PostModel } from './models/post.model';

const app: FastifyInstance = Fastify();

connect().then(async (db) => {
  console.log("Connected to MongoDB");
  
  let data = await db.collection("table_name").find().toArray();
  console.log(data);
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