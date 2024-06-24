import mongoose from 'mongoose';
export interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export const PostModel = mongoose.model<Post>('posts', new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
}, { timestamps: true }));