import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Blog from '../../../models/blog';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await dbConnect()
    switch (method) {
        case 'GET':

            try {
                const blog = await Blog.find({ $sort: { date: 1 } });
                res.status(200).json({ success: true, data: blog })
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
