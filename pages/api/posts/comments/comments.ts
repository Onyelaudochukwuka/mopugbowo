import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import Comment from '../../../../models/comments';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await dbConnect()
    switch (method) {
        case 'GET':
            try {
                const comment = await Comment.find({ slug: { $eq: req.query.slug } });
                    res.status(200).json({ success: true, data: comment })
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
