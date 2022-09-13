import { Schema, model, models } from "mongoose";
import type { Descendant } from 'slate';
export interface BlogPost{
        date: number;
        title: string;
        excerpt: string;
        image_url: string;
        post: PostSchema[] | Descendant[];
}

interface ChildSchema {
        text: string;
        bold: boolean;
        align: string;
        code: boolean;
        italic: boolean;
        underline: boolean;
}
const childSchema = new Schema<ChildSchema>({
        text: String,
        bold: {
                type: Boolean,
                default: false
        },
        align: String,
        code: {
                type: Boolean,
                default: false
        },
        italic: {
                type: Boolean,
                default: false
        },
        underline: {
                type: Boolean,
                default: false
        }
});
interface PostSchema {
        type: string;
        children: ChildSchema[];
}
const postSchema = new Schema<PostSchema>({
        "type": String,
        children: [childSchema] 
        });
const blogSchema = new Schema<BlogPost>({
        date: {
                type: Number,
                default: Date.now()
        },
        image_url: String,
        title: String,
        excerpt: String,
        post: [postSchema]
        
});

module.exports = models.blog || model('blog', blogSchema);