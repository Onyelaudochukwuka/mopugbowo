import { Schema, model, models } from 'mongoose';

interface EmailSchema {
  email: string
}

const emailSchema = new Schema<EmailSchema>({
  email: String,
});

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default models.Email || model('Email', emailSchema);
