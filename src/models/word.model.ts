import mongoose from 'mongoose';
export interface Word {
    id: string;
    word: string;
    define: string;
}

export const WordModel = mongoose.model<Word>('words', new mongoose.Schema({
    word: { type: String, required: true },
    define: { type: String, required: true }
}, { timestamps: true }));
