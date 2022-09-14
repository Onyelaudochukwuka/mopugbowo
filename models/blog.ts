import { Schema, model, models } from "mongoose";
import type { Descendant } from 'slate';
export interface BlogPost{
        _id: string,
        date: number;
        title: string;
        excerpt: string;
        image_url: string;
        slug: string;
        post: PostSchema[];
}

interface ChildSchema {
        _id: string;
        text: string;
        bold?: boolean;
        align?: string;
        code?: boolean;
        italic?: boolean;
        underline?: boolean;
        type?: string;
        children?: ChildOfChildSchema[];
}
interface ChildOfChildSchema {
        _id: string;
        text: string;
        bold: boolean;
        align: string;
        code: boolean;
        italic: boolean;
        underline: boolean;
}
const childOfChildSchema = new Schema<ChildOfChildSchema>({
        text: {
                type: String,
                default: "",
                required: true
        },
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
const childSchema = new Schema<ChildSchema>({
        text: String,
        "type": {
                type: String,
                default: ""
        },
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
        },
        children: [childOfChildSchema]
});
interface PostSchema {
        _id: string;
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
        slug: String,
        post: [postSchema],
        
});

module.exports = models.blog || model('blog', blogSchema);