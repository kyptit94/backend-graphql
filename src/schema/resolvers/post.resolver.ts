import { Post, PostModel } from '../../models/post.model';
const PostResolvers = {
    Query: {
      posts: async (_: any, { limit, index }: { limit: number; index: number }): Promise<Post[]> => {
        console.log(PostModel)
        return await PostModel.find().skip(index).limit(limit); 
      },
    },
    Mutation: {
      createPost: async (_: any, { title, content }: { title: string; content: string }): Promise<Post> => {
        const newPost = new PostModel({
            title,
            content,
            // Add other fields as necessary
        });

        try {
            const savedPost = await newPost.save();
            return savedPost;
        } catch (error) {
            throw new Error("Error creating post: " + (error as Error).message);
        }
      },
      updatePost: async (_: any, { id, title, content }: { id: string; title: string; content: string }): Promise<Post> => {
          try {
              const updatedPost = await PostModel.findByIdAndUpdate(id, { title, content }, { new: true });
              return updatedPost as Post;
          } catch (error) {
              throw new Error("Error updating post: " + (error as Error).message);
          }
      }
    }
};

export default PostResolvers;