import { NextApiRequest, NextApiResponse } from 'next';

export default function echo(req: NextApiRequest, res: NextApiResponse) {
  res.json({ message: req.query.message ?? 'No message' });
}
