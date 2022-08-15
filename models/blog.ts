import {Schema, model, models} from "mongoose";
interface BlogPost{
        date: number;
        title: string;
}
const blogSchema = new Schema<BlogPost>({
        date: {
                type: Number,
                default: Date.now()
        },
        title: String
});
module.exports = models.Url || model('Url', blogSchema);