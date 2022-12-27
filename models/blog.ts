import { Schema, model, models } from 'mongoose';

export interface BlogPost {
  _id?: string
  date: number
  title: string
  excerpt: string
  image_url: string
  slug: string
  post: string
}

const blogSchema = new Schema<BlogPost>({
  date: {
    type: Number,
    default: Date.now(),
  },
  image_url: String,
  title: String,
  excerpt: String,
  slug: String,
  post: String,

});

export default models?.Blog || model('Blog', blogSchema);
