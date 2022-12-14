import { Schema, model, models } from 'mongoose';

export interface CommentSchema {
  comment: string
  name: string
  email: string
  date: number
  slug: string
}
const commentSchema = new Schema<CommentSchema>({
  name: String,
  comment: String,
  email: String,
  date: {
    type: Number,
    default: Date.now(),
  },
  slug: String,
});

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default models.Comment || model('Comment', commentSchema);
