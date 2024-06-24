import * as fs from 'fs';
import * as path from 'path';
import { makeExecutableSchema } from 'graphql-tools';

export const createSchema = () => {
  const typeDefs = fs.readdirSync(path.join(__dirname, './typeDefs'))
      .filter((file: string) => file.endsWith('.typeDefs.ts'))
      .map((file: string) => require(`./typeDefs/${file}`).default);

    // Dynamically read resolvers
    const resolversArray = fs.readdirSync(path.join(__dirname, './resolvers'))
      .filter((file: string) => file.endsWith('.resolver.ts'))
      .map((file: string) => require(`./resolvers/${file}`).default);

    // Combine resolvers
    const resolvers = resolversArray.reduce((acc, resolverObj) => {
      Object.keys(resolverObj).forEach((key) => {
        if (acc[key]) {
          acc[key] = { ...acc[key], ...resolverObj[key] };
        } else {
          acc[key] = resolverObj[key];
        }
      });
      return acc;
    }, {});

    // Create executable schema
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    });

    return schema;
}