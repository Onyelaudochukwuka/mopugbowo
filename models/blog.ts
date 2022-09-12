import { Schema, model, models } from "mongoose";
import type { Descendant } from 'slate';
export interface BlogPost{
        date: number;
        title: string;
        post: Descendant[];
}
const blogSchema = new Schema<BlogPost>({
        date: {
                type: Number,
                default: Date.now()
        },
        title: String,
        post: [{ type: String, children: [{ text: String }] }]
        
});

module.exports = models.Url || model('Url', blogSchema);