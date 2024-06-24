import { User, UserModel } from '../../models/user.model';
const UserResolvers = {
    Query: {
      users: async (_: any, { limit, index }: { limit: number; index: number }): Promise<User[]> => {
        return await UserModel.find().skip(index).limit(limit); 
      },
    },
    Mutation: {
      register: async (_: any, { name, email }: { name: string; email: string }): Promise<User> => {
        const user = new UserModel({ name, email });
        await user.save();
        return user;
      },
    },
};

export default UserResolvers;