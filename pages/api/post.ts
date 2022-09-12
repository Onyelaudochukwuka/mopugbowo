import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
const Blog = require('../../models/blog');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { post, heading, date } = req.body;
    await dbConnect()

    switch (method) {
        case 'POST':
            if (!!post && !!heading && !!date) { 
                try {
                    const url = await Blog.create({ post, heading, date });
                    res.status(201).json({ success: true, data: url })
                }
                catch (error: any) {
                    res.status(400).json({ success: false, message: error.message });
                }
            } else {
                res.status(400).json({ success: false, message: "Please enter all fields" });
            }
        default:
            res.status(400).json({ success: false })
            break
    }
}