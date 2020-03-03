import { Document, model, Schema } from 'mongoose';

// Interface
export interface IArticle extends Document {
  title: string,
  description: string,
  imageURL: string
};

// Schema
const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

export default model<IArticle>('Article', articleSchema);