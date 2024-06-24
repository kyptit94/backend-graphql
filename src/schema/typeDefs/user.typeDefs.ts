const WordType = `
    type Query {
      users(limit: Int, index: Int): [User]
    }

    type Mutation {
        register(name: String, email: String): User
    }

    type User {
      name: String
      email: String
      id: String
    }
  `;

export default WordType;