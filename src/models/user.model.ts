import mongoose from 'mongoose';
export interface User {
    id: string;
    user: string;
    define: string;
}

export const UserModel = mongoose.model<User>('users', new mongoose.Schema({
    user: { type: String, required: true },
    define: { type: String, required: true }
}, { timestamps: true }));
