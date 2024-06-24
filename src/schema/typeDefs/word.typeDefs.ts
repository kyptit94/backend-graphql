const WordType = `
    type Query {
      words(limit: Int, index: Int): [Post]
    }

    type Post {
      word: String
      define: String
      id: Int
    }
  `;

export default WordType;