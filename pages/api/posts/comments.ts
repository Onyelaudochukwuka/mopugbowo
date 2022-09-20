import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Blog from '../../../models/blog';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await dbConnect()
    switch (method) {
        case 'POST':
            try {
                const exists = await Blog.find({ slug: { $eq: req.body.slug } });
                if (exists.length === 0) {
                    const blog = await Blog.create(req.body);
                    res.status(201).json({ success: true, data: blog })
                } else {
                    res.status(400).json({ success: false, message: "Post already exists" })
                }
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