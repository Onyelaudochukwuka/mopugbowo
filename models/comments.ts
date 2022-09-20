import { Schema, model, models } from "mongoose";
interface CommentSchema {
    comment: string;
    name: string;
    email: string;
    date: number;
}
const commentSchema = new Schema({
    name: String,
    comment: String,
    email: String,
    date: {
        type: Number,
        default: Date.now()
    }
});

export default models.Comment || model("Comment", commentSchema);