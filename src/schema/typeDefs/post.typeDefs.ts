const PostType = `
    type Query {
      posts(limit: Int, index: Int): [Post]
    }

    type Mutation {
      createPost(title: String!, content: String!): Post
      updatePost(id: String!, title: String!, content: String!): Post
    }

    type Post {
      title: String
      content: String
      id: String
    }
  `;

export default PostType;