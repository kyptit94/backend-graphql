import { Post, PostModel } from '../../models/post.model';
const PostResolvers = {
    Query: {
      posts: async (_: any, { limit, index }: { limit: number; index: number }): Promise<Post[]> => {
        return await PostModel.find().skip(index).limit(limit); 
      },
    },
};

export default PostResolvers;