/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../../lib/dbConnect';
import Blog, { BlogPost } from '../../../models/blog';

interface Data {
  success: boolean
  data?: BlogPost
  message?: string
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const { method } = req;
  const { slug } = req.query;
  await dbConnect();
  switch (method) {
    case 'GET':
      try {
        const blog = await Blog.findOne({ slug });
        if (blog) {
          res.status(200).json({ success: true, data: blog });
        } else {
          res.status(404).json({ success: false, message: 'Post not found' });
        }
      } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
export default handler;
