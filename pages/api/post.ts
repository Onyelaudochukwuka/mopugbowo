import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
const Blog = require('../../models/blog');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { post, heading, date } = req.body;
    console.log(req.body);
    await dbConnect()
    switch (method) {
        case 'POST':

                try {
                    const blog = await Blog.create({ post, heading, date });
                    res.status(201).json({ success: true, data: blog })
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