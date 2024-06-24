import { Word, WordModel } from '../../models/word.model';
const WordResolvers = {
    Query: {
      words: async (_: any, { limit, index }: { limit: number; index: number }): Promise<Word[]> => {
        return await WordModel.find().skip(index).limit(limit); 
      },
    },
};

export default WordResolvers;