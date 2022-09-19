import { Schema, model, models } from "mongoose";
const emailSchema = new Schema({});

export default models.Email || model("Email", emailSchema);