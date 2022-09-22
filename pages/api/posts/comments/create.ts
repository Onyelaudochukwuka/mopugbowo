import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import Comment, { CommentSchema } from '../../../../models/comments';
interface Data {
    success: boolean,
    data?: CommentSchema,
    message?: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'POST':
            try {
                const comment = await Comment.create(req.body);
                res.status(201).json({ success: true, data: comment })
            }
            catch (error: any) {
                console.log(error);
                res.status(400).json({ success: false, message: error.message });
            }
            break;
        default:
            res.status(400).json({ success: false })
            break
    }
}