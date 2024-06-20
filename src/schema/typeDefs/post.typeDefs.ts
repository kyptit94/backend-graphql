const PostType = `
    type Query {
      posts(limit: Int, index: Int): [Post]
    }

    type Post {
      title: String
      content: String
      id: Int
    }
  `;

export default PostType;