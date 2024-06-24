import mongoose from 'mongoose';
export interface Word {
    id: string;
    word: string;
    define: string;
    createdAt: Date;
    updatedAt: Date;
}

export const WordModel = mongoose.model<Word>('words', new mongoose.Schema({
    word: { type: String, required: true },
    define: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
}));
