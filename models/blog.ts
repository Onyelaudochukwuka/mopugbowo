import {Schema, model, models} from "mongoose";
interface BlogPost{
        date: number;
        title: string;
        post: {
                type: string,
                children: { text: string }[]

        }[]
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