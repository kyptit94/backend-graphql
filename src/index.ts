import Fastify, { FastifyInstance } from 'fastify';
import mercurius from 'mercurius';
import { connect } from './database';
import { createSchema } from './schema';

const app: FastifyInstance = Fastify();

connect().then(async (db) => {
  console.log("Connected to MongoDB");

  const schema = createSchema();

  app.register(mercurius, {
    schema,
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