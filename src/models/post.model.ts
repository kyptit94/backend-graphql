import mongoose from 'mongoose';
export interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export const PostModel = mongoose.model<Post>('Posts', new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
}));
